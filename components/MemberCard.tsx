interface Member {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export default function MemberCard({ name, role, photo, bio }: Member) {
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 shadow rounded-2xl overflow-hidden m-4">
      <img src={photo} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{role}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-200">{bio}</p>
      </div>
    </div>
  );
}
