const FINISHED_STRING = "---done---";

class AIChat {
  ws: WebSocket | null = null;
  finishedMessageCallbacks: (() => void)[] = [];

  private isWebSocketReady(ws: WebSocket | null): ws is WebSocket {
    return !!this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  start(): void {
    if (this.isWebSocketReady(this.ws)) return;

    this.ws = new WebSocket(import.meta.env.VITE_WS_URL);
    this.ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };
  }

  sendMessage(message: string): void {
    if (!this.isWebSocketReady(this.ws)) return;

    this.ws.send(message);
  }

  setOnFinishedMessage(callback: () => void): void {
    if (!this.ws) return;

    this.finishedMessageCallbacks.push(callback);
  }

  setOnMessage(callback: (event: MessageEvent) => void): void {
    if (!this.ws) return;

    this.ws.addEventListener("message", (event) => {
      if (event.data === FINISHED_STRING) {
        this.finishedMessageCallbacks.forEach((cb) => cb());
        return;
      }
      console.log("Received:", event.data);
      callback(event);
    });
  }

  /**
   * Checks if the WebSocket connection is ready. non private version.
   *
   * @returns whether the WebSocket connection is ready
   */
  isReady(): boolean {
    return this.isWebSocketReady(this.ws);
  }

  close(): void {
    if (!this.isWebSocketReady(this.ws)) return;

    console.log("WebSocket connection closed");
    this.ws.close();
    this.finishedMessageCallbacks = [];
  }
}

const AIChatInstance = new AIChat();

export default AIChatInstance;
