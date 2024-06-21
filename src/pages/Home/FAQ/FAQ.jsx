import FAQ_img from "../../../../public/images/image-132-copyright.jpg";

const FAQ = () => {
  return (
    <section className="space-y-10">
      {/* text */}
      <div>
        <h2 className="md:text-5xl text-3xl font-bold ">
          Frequently Asked Questions
        </h2>
      </div>

      {/* new FAQ */}
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-4 ">
        <div className="lg:w-3/5 space-y-4">
          <div className="collapse collapse-arrow rounded-none bg-base-200 py-2 ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              The Virus Disease 2019 Basics
            </div>
            <div className="collapse-content">
              <p>
                The Virus disease 2019 (Pandemic) is an infectious disease
                caused by severe acute respiratory syndrome coronavirus 2. It
                was first identified in 2019 in Wuhan, China, and has since
                spread globally.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200 py-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How It Spreads
            </div>
            <div className="collapse-content">
              <p>
                The virus that shows the disease within 14 days of entering the
                body. The virus is transmitted from symptomatic people to others
                who are in close contact through respiratory droplets.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200 py-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How to Protect Yourself
            </div>
            <div className="collapse-content">
              <p>
                You can reduce your chances of being infected or spreading the
                virus by regularly and thoroughly cleaning your hands with an
                alcohol-based hand rub or wash them with soap and water.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200 py-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What are the current treatments available for COVID-19?
            </div>
            <div className="collapse-content">
              <p>
                Treatment for COVID-19 varies depending on the severity of the
                symptoms. Mild cases can often be managed at home with rest,
                hydration, and over-the-counter medications for symptom relief.
                For moderate to severe cases, especially those requiring
                hospitalization, treatments may include antiviral medications
                (such as remdesivir), corticosteroids (like dexamethasone), and
                other supportive care measures (such as oxygen therapy or
                mechanical ventilation). In some cases, monoclonal antibody
                treatments may be available. Always consult with a healthcare
                professional for the most appropriate treatment options.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-none bg-base-200 py-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What are the common symptoms of COVID-19?
            </div>
            <div className="collapse-content">
              <p>
                COVID-19 symptoms can range from mild to severe and may appear
                2-14 days after exposure to the virus. Common symptoms include
                fever or chills, cough, shortness of breath or difficulty
                breathing, fatigue, muscle or body aches, headache, new loss of
                taste or smell, sore throat, congestion or runny nose, nausea or
                vomiting, and diarrhea.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 lg:mb-0 mb-4">
          <img className="object-cover h-full" src={FAQ_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
