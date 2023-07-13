export const SpeakerCard = ({ speaker }) => {
  const { name, designation, image } = speaker;

  return (
    <div class="w-16 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer m-5">
      <div class="relative">
        <img class="w-full h-16 object-cover" src={image} alt={name} />
        <span class="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
          {}
        </span>
        <p class="bg-white rounded p-2 absolute bottom-0 left-2 text-gray-500 text-sm">
          {designation}
        </p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">{name}</h3>
      </div>
    </div>
  );
};
