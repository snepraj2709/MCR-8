export const SpeakerCard = ({ speaker }) => {
  const { name, designation, image } = speaker;

  return (
    <div class="w-26 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer m-5 p-3">
      <div className="flex flex-row">
        <img
          class="w-20 h-20 object-cover rounded-full"
          src={image}
          alt={name}
        />
        <div>
          <p class="bg-white rounded p-2 text-gray-800 font-bold text-xs">
            {name}
          </p>
          <p class="bg-white rounded p-2 text-gray-500 font-thin text-xs">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};
