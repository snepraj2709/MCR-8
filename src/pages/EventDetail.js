import { useState } from "react";
import { useData } from "../context/DataContext";
import { BiTime } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { SpeakerCard } from "../components/SpeakerCard";
import RegisterModal from "../components/RegisterModal";

export default function EventDetail() {
  const [register, setRegister] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = state.currentMeetup;

  const startTime = new Date(eventStartTime).toDateString();
  const endTime = new Date(eventEndTime).toDateString();

  const registerHandler = () => {
    setRegister(true);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-row bg-white rounded-lg shadow-md p-4 justify-center">
      <div className="flex flex-col w-1/2 m-10">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <span className="text-gray-600 mb-4">
          Hosted By: <b>{hostedBy}</b>
        </span>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            className="object-cover rounded w-full h-full"
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
        <h2 className="text-xl font-bold mb-2">Event Tags</h2>
        <div className="flex flex-row">
          {eventTags?.map((tag) => (
            <div className="bg-orange-300 py-1 px-5 w-auto text-white text-xs rounded-xl m-3">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col ml-4 w-1/4 m-10">
        <div className="flex flex-col mb-4">
          <div className="flex flex-row items-center mb-2">
            <BiTime className="text-gray-600 mr-2" />
            <div className="flex flex-col">
              <span className="text-gray-700">
                <b>Starts at:</b>
                <p className="text-gray-600">{startTime}</p>
              </span>
              <span className="text-gray-700">
                <b>Ends at:</b>
                <p className="text-gray-600">{endTime}</p>
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
              className="bg-blue-500 text-white rounded py-2 px-4 text-center"
              onClick={registerHandler}>
              {register ? (
                <button
                  disabled={!register}
                  className="disabled:bg-gray-500 disabled:cursor-not-allowed">
                  Already RSVP
                </button>
              ) : (
                <button>RSVP</button>
              )}
            </div>
            {register && (
              <div>
                <RegisterModal
                  isOpen={openModal}
                  onClose={closeModal}
                  registerEvent={setRegister}
                  paid={isPaid}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
