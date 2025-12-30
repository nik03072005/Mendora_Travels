export default function FeatureSection() {
  return (
    <div >
      {/* Fog Gradient */}
        
     

      {/* Actual Content */}
      <div className="relative bg-white py-8 shadow-inner ">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-6 px-4">
          <div className="flex flex-col items-center">
            <img
              src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center font-medium text-sm">
              4.8* Rated
              <br />
              in Google
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center font-medium text-sm">
              Community
              <br />
              of 35k
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.fBJMvyZEGyoX2gQ5AEKe4wHaHa?w=900&h=900&rs=1&pid=ImgDetMain"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center font-medium text-sm">
              300+
              <br />
              Itineraries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
