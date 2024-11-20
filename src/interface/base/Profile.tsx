const Profile = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <img
        className="rounded-full w-8 h-8 mr-2"
        src="https://avatars.githubusercontent.com/u/61067472?s=400&u=b572e74023bbb67946f6cba4d34e5981c5cf1f20&v=4"
        alt="profile"
      />
      <div className="font-semibold">Dion Tu</div>
    </div>
  );
};

export default Profile;
