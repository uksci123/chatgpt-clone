import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'
const HomePage = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-bold mb-20">ChatGpt</h1>

      <div className='flex space-x-2 text-center'>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon*/}
            <SunIcon className='h-8 w-8'/>
            <h2>Example</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain Something to me&quot;</p>
            <p className="infoText">&quot;What is the difference between dog and cat?&quot;</p>
            <p className="infoText">&quot;What is the color of the sun?&quot;</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon*/}
            <BoltIcon className='h-8 w-8'/>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the Gpt Model to use</p>
            <p className="infoText">Message are store in Firebase&apos;s Firestore</p>
            <p className="infoText">Hot Toast notification when ChatGpt is thinking!</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon*/}
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>Limitaion</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">May occasionally generate the incorect information</p>
            <p className="infoText">May occasionally generate Harmful Instrunction or biased content</p>
            <p className="infoText">Limited Knowledge of world and event after 2021</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
