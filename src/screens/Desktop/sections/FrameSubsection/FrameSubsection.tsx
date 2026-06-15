import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navItems = [
  { label: "Our Menu", active: true },
  { label: "About Us", active: false },
];

const specialtyTabs = [
  { label: "General", active: true },
  { label: "Pediatric", active: false },
  { label: "Dentist", active: false },
  { label: "ENT Spesialist", active: false },
];

const appointmentFields = [
  {
    label: "Location",
    value: "Sukabumi, Indonesia",
    iconAlt: "Vuesax bulk location",
    iconSrc: "/vuesax-bulk-location.svg",
    iconType: "image",
    widthClass: "lg:col-span-4",
  },
  {
    label: "Appointment Date",
    value: "03 Sept 2022",
    iconAlt: "Vuesax bulk calendar",
    iconSrc: "/vuesax-bulk-calendar.png",
    iconType: "image",
    widthClass: "lg:col-span-4",
  },
  {
    label: "Who",
    value: "1 Adult",
    iconAlt: "Vuesax bulk profile",
    iconSrc: "/vuesax-bulk-profile.svg",
    iconType: "image",
    widthClass: "lg:col-span-2",
  },
];

export const FrameSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-6 sm:px-10 xl:px-[62px]">
        <header className="flex w-full items-center justify-between gap-4">
          <h2 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-2xl font-semibold leading-[19px] tracking-[-0.96px] text-[#0e1120]">
            Dentalme.
          </h2>
          <nav
            aria-label="Primary"
            className="flex items-center gap-3 sm:gap-6"
          >
            {navItems.map((item) =>
              item.active ? (
                <Button
                  key={item.label}
                  type="button"
                  variant="outline"
                  className="h-auto rounded-[20px] border border-solid border-[#868a95] bg-transparent px-4 pb-2.5 pt-2 [font-family:'Poppins',Helvetica] text-base font-semibold leading-[18px] tracking-[0] text-[#0e1120] hover:bg-transparent"
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  type="button"
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Poppins',Helvetica] text-base font-normal leading-normal tracking-[-0.64px] text-[#0e1120] hover:bg-transparent hover:text-[#0e1120]"
                >
                  {item.label}
                </Button>
              ),
            )}
          </nav>
        </header>
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pb-6 pt-0 sm:px-10 xl:px-[62px]">
        <div className="relative w-full">
          <div className="rounded-[30px] bg-[#d0d0d0]">
            <div className="flex min-h-[952px] flex-col overflow-hidden rounded-[30px] bg-[#d0d0d0]">
              <div className="bg-[#131d4180] px-5 py-6 backdrop-blur-[5.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.5px)_brightness(100%)] sm:px-8 lg:px-[50px] lg:py-[34px]">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[93px]">
                  <div className="flex shrink-0 flex-col items-start gap-2.5">
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-auto p-0 [font-family:'Poppins',Helvetica] text-left text-[38px] font-semibold leading-normal tracking-[-0.76px] text-[#f9c200] underline hover:bg-transparent hover:text-[#f9c200]"
                    >
                      Accept All
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-auto p-0 [font-family:'Poppins',Helvetica] text-left text-[38px] font-semibold leading-normal tracking-[-0.76px] text-white hover:bg-transparent hover:text-white"
                    >
                      Save
                    </Button>
                  </div>
                  <div className="flex max-w-[880px] flex-col items-start gap-5">
                    <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[32px] font-semibold leading-7 tracking-[-0.64px] text-white">
                      This Website Use Cookies
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] text-lg font-normal leading-8 tracking-[0.72px] text-white">
                      We Use Cookies To Provide The Bezt Experience On Our
                      Website. This Includes Cookies For Website Functionality
                      To Manage Our Commercial Objectives And Optimization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-end px-6 pb-10 pt-10 sm:px-10">
                <div className="flex flex-col items-start gap-[30px]">
                  <p className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[22px] font-normal leading-normal tracking-[0] text-[#0e1120]">
                    Latest Breakthrough
                  </p>
                  <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
                    <h1 className="max-w-[465px] [font-family:'Poppins',Helvetica] text-[58px] font-semibold leading-[0.8] tracking-[-2.5px] text-[#0e1120] sm:text-[80px] lg:text-[120px] lg:leading-[96px] lg:tracking-[-4.80px]">
                      AI for Dental
                    </h1>
                    <div className="inline-flex items-start gap-2.5 self-end rounded-[10px] bg-[#131d4080] px-6 py-4 backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)] sm:px-8 sm:py-5">
                      <p className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-xl font-semibold leading-normal tracking-[-0.90px] text-white sm:text-3xl">
                        AI-based inspection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card className="relative z-10 -mt-[70px] w-full rounded-[20px] border-0 bg-white shadow-[0px_30px_80px_#00000014] sm:-mt-[56px] lg:mx-auto lg:w-[calc(100%-72px)] lg:max-w-[1244px]">
            <CardContent className="flex flex-col gap-[41px] px-6 pb-[30px] pt-8 sm:px-8 lg:px-[60px] lg:pb-[30px] lg:pt-[50px]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-[95px]">
                <h3 className="mt-[-1.00px] shrink-0 [font-family:'Poppins',Helvetica] text-3xl font-semibold leading-normal tracking-[0.60px] text-[#0e1120]">
                  Book Appointment
                </h3>
                <div className="flex flex-wrap items-start gap-6 lg:gap-10">
                  {specialtyTabs.map((tab) => (
                    <button
                      key={tab.label}
                      type="button"
                      onClick={() => setActiveTab(tab.label)}
                      className="flex flex-col items-center gap-2"
                    >
                      <span
                        className={`[font-family:'Poppins',Helvetica] text-2xl leading-normal tracking-[0.48px] ${
                          activeTab === tab.label
                            ? "font-semibold text-[#0e1120]"
                            : "font-normal text-[#a5a6aa]"
                        }`}
                      >
                        {tab.label}
                      </span>
                      {activeTab === tab.label && (
                        <img
                          className="h-[2.5px] w-[162.5px]"
                          alt="Line"
                          src="/line-1.svg"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                {appointmentFields.map((field) => (
                  <div
                    key={field.label}
                    className={`${field.widthClass} flex min-h-[74px] items-center rounded-2xl border border-solid border-[#cfd1d7] px-4 py-[15px]`}
                  >
                    <div className="mr-[14px] flex h-11 w-11 shrink-0 items-center justify-center rounded-[22px] bg-[#f0f0fd]">
                      {field.iconType === "image" && (
                        <img
                          className="h-6 w-6"
                          alt={field.iconAlt}
                          src={field.iconSrc}
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="[font-family:'Poppins',Helvetica] text-base font-normal leading-normal tracking-[0.32px] text-[#797c8b]">
                        {field.label}
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] text-lg font-semibold leading-normal tracking-[0] text-[#0e1120]">
                        {field.value}
                      </span>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  className="h-auto rounded-2xl bg-[#403dd8] px-8 py-6 hover:bg-[#403dd8] lg:col-span-2 lg:px-[58px] lg:pr-[68px]"
                >
                  <span className="inline-flex items-center gap-2">
                    <img
                      className="h-6 w-6"
                      alt="Search alt"
                      src="/search-alt.svg"
                    />
                    <span className="[font-family:'Poppins',Helvetica] text-xl font-semibold leading-normal tracking-[0.40px] text-white">
                      Search
                    </span>
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
