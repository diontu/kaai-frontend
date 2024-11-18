const Profile = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <img
        className="rounded-full w-8 h-8 mr-2"
        src="https://github.com/luanpereira.png"
        alt="profile"
      />
      <div className="font-semibold">Dion Tu</div>
    </div>
  );
};

export default Profile;
