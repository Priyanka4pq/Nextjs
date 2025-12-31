import Image from "next/image";
import priy from "@/public/image.webp";


const Service = () => {
  return (
    <section className="font-roboto py-12">
      <h1 className="text-center text-2xl font-bold mb-8">Hello Services</h1>

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
             
          <Image src="/image.webp" width={24} height={24} alt="pri" className="w-full h-full rounded-full"/>


            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Thapa Technical
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Frontend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              React & TypeScript
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white  rounded-lg shadow-md  hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image src={priy}  alt="priy" fill={true}
                quality={100}  //increases the image size
                priority={false}
                placeholder="blur"
                blurDataURL=""
              />
            </div>
            
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">RS</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Rahul Singh
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node & Express
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-pink-700">AS</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Aman Sharma
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              UI/UX Designer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Figma & Adobe XD
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-700">NK</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Neha Kumari
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              QA Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Testing & Automation
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-red-700">SK</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Saurav Kumar
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              AWS & Docker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
