export const EventCard = ({ meetup }) => {
  const { title, eventStartTime, eventThumbnail, eventType } = meetup;
  const newDate = new Date(eventStartTime);
  console.log(newDate);

  return (
    <div class="w-64 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer m-5">
      <div class="relative">
        <img
          class="w-full h-48 object-cover"
          src={eventThumbnail}
          alt={title}
        />
        <span class="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
          {eventType}
        </span>
        <p class="bg-white rounded p-2 absolute bottom-2 left-2 text-gray-500 text-sm">
          {eventStartTime}
        </p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">{title}</h3>
      </div>
    </div>
  );
};
