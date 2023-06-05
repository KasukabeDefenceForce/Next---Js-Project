import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <secction className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleEdit && handleDelete(post)}
          />
        ))}
      </div>
    </secction>
  );
};

export default Profile;