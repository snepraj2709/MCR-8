import { useData } from "../context/DataContext";
import { BiTime } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { SpeakerCard } from "../components/SpeakerCard";
import { useState } from "react";

export default function EventDetail() {
  const [register, setRegister] = useState(false);
  const { state } = useData();
  const {
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = state.currentMeetup;

  return (
    <div className="flex flex-row bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <span className="text-gray-600 mb-4">
          Hosted By: <b>{hostedBy}</b>
        </span>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            className="object-cover rounded w-half h-60"
            src={eventThumbnail}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold mb-2">Details</h2>
        <p className="text-gray-800 mb-4">{eventDescription}</p>
        <hr />
        <h2 className="text-xl font-bold mb-2">Additional Information</h2>
        <div className="mb-4">
          <b className="text-gray-700">Dress Code:</b>
          <p>{additionalInformation?.dressCode}</p>
        </div>
        <div className="mb-4">
          <b className="text-gray-700">Age Restrictions:</b>
          <p>{additionalInformation?.ageRestrictions}</p>
        </div>
      </div>

      <div className="flex flex-col ml-4">
        <div className="flex flex-col mb-4">
          <div className="flex flex-row items-center mb-2">
            <BiTime className="text-gray-600 mr-2" />
            <div className="flex flex-col">
              <span className="text-gray-700">
                <b>Starts at:</b>
                <p className="text-gray-600">{eventStartTime}</p>
              </span>
              <span className="text-gray-700">
                <b>Ends at:</b>
                <p className="text-gray-600">{eventEndTime}</p>
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center mb-2">
            <CiLocationOn className="text-gray-600 mr-2" />
            <div className="flex flex-col">
              <span className="text-gray-700">
                <b>{location}</b>
                <p className="text-gray-600">{address}</p>
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            {isPaid ? (
              <>
                <FaRupeeSign className="text-gray-600 mr-2" />
                <div className="flex flex-col">
                  <span className="text-gray-700">
                    <p className="text-gray-600">{price}</p>
                  </span>
                </div>
              </>
            ) : (
              <p className="text-gray-600">Free</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">
            Speakers ({speakers.length})
          </h2>
          {speakers.map((speaker) => (
            <div className="mb-4">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
          <div>
            <div
              className="bg-blue-500 text-white rounded py-2 px-4"
              onClick={() => setRegister(true)}>
              {register ? (
                <button disabled={!register}>Already RSVP</button>
              ) : (
                <button>RSVP</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
