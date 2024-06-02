export default function ContactPage() {
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="space-y-4">
        <p className="text-center font-semibold text-lg">Get in Touch</p>
        <p className="text-center text-5xl font-bold">Contact Me</p>
        <div className="!my-24 font-semibold text-lg flex items-center justify-center gap-24 border border-[#383838] rounded-full p-10">
          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              className="fill-[#383838]"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <p>piercehahn.coding@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg className="w-10 fill-[#383838]" viewBox="0 0 128 128">
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
            </svg>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
