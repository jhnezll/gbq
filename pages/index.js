import Navbar from "../components/PageLayout/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
      <div>
          {/*Navbar*/}
          <Navbar/>

          {/*Hero*/}
          <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-screen h-screen flex justify-center items-center px-12 bg-hero-pattern bg-cover bg-center">
                  <div className="text-center space-y-2 ">
                      <p>Better Quick</p>
                      <h1 className="text-4xl font-bold text-gray-900 drop-shadow-xl">THE PATH TO BETTER STARTS NOW</h1>
                      <h2 className="text-2xl text-gray-700 mb-12">We are a nonprofit organization dedicated in helping people fight against drug abuse.</h2>
                  </div>
              </div>
          </div>

          {/*Subtitle*/}
          <div className="w-screen justify-center text-center py-10 bg-gradient-to-b from-blue-400 to white">
              <h1 className="justify-center text-2xl font-semibold px-12 lg:px-64">Dealing with the issues of drugs abuse is not an easy task. It effects both the abuser and the people they care about. Don't feel ashamed to reach out for help. We are here to help!</h1>
          </div>

          {/*Cards*/}
          <div className="width-screen py-6 flex">
              <Card
                img="https://cdn.dribbble.com/users/844597/screenshots/15743405/media/1dce97e1f8152d6d6ffa6f35080f1a09.png?compress=1&resize=1200x900"
                alt="Alcohol"
                title="Alcohol Abuse"
                desc="85% of people have struggled with alcohol abuse over in America."
              />
              <Card
                  img="https://cdn.dribbble.com/users/788099/screenshots/5639158/media/67f07b29690214106a849d5edfe3ba7f.png?compress=1&resize=800x600"
                  alt="Opioid Abuse"
                  title="Opioid Abuse"
                  desc="In 2019, over 10 million people misused opioids at some point."
              />
              <Card
                  img="https://cdn.dribbble.com/users/1529018/screenshots/7097982/media/49e0de3c42e2d386c0360d08f70a2f7f.jpg?compress=1&resize=1200x900"
                  alt="Cocaine Abuse"
                  title="Cocaine Abuse"
                  desc="In 2014, 913,000 people struggled with cocaine abuse."
              />
              <Card
                  img="https://cdn.dribbble.com/users/30784/screenshots/6363299/heisenberg.png?compress=1&resize=800x600"
                  alt="Methamphetamine Abuse"
                  title="Methamphetamine Abuse"
                  desc="964,000 people had a methamphetamine disorder in 2017."
              />
          </div>
      </div>
  )
}
