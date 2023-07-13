export const SpeakerCard = ({ speaker }) => {
  const { name, designation, image } = speaker;

  return (
    <div class="w-26 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer m-5">
      <div class="relative">
        <img class="w-full h-20 object-cover" src={image} alt={name} />

        <p class="bg-white rounded p-2 absolute bottom-0 left-2 text-gray-500 font-thin text-xs">
          {designation}
        </p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">{name}</h3>
      </div>
    </div>
  );
};
