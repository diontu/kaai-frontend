const EmptyChat = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center text-muted-foreground">
      {/* TODO: maybe make this message a bit more personalized or at least personable. be more frinedly and strike them towards the cooking direct */}
      <p>I'm your personal Kitchen Assistant AI, what can I do for you?</p>
    </div>
  );
};

export default EmptyChat;
