import img from "../assets/eating.jpg";
const Contact = () => {
  return (
    <section className=" max-w-7xl mx-auto my-12 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
      <div
        className="bg-[#cf711f] text-black p-10 flex-1"
        style={{
          backgroundImage: "linear-gradient(to right bottom, #eb984e, #e67e22)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Get your first meal for free!
        </h2>
        <p className="mb-8 text-lg text-[#2e1907]">
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          well today. You can cancel or pause anytime. And the first meal is on
          us!
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1 text-[#2e1907]">
              <label className="mb-1 font-medium ">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-md bg-orange-100 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md bg-orange-100 text-gray-700 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-medium">
                Where did you hear from us?
              </label>
              <select className="px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none">
                <option>Please Choose one option</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Friends</option>
                <option>Google Search</option>
              </select>
            </div>

            <div className="flex items-end flex-1">
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition"
              >
                Signup Now
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex-1 hidden md:block">
        <img
          src={img}
          alt="Smiling woman with healthy food"
          className="h-[450px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
