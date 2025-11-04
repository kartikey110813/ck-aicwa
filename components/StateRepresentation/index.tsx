"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const NationwideFootprint = () => {
  const [activeState, setActiveState] = useState<number | null>(null);
  const [statesData, setStatesData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // Force re-render function
  const forceRender = () => setRenderKey((prev) => prev + 1);

  // Fetch data with multiple fallbacks
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        console.log("🚀 Starting API call...");
        setIsLoading(true);

        // Test with static data first to ensure rendering works
        const staticTestData = [
          {
            state: "Maharashtra",
            schools: [
              {
                id: 1,
                name: "SANJAY PATIL",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 2,
                name: "CHHAYA SANGAVKAR",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 3,
                name: "NITIN RAJSHEKHAR",
                profileImage: "/school.png",
                city: "Morbi",
              },
            ],
          },
          {
            state: "Rajasthan",
            schools: [
              {
                id: 4,
                name: "MR. SANJAY CHATURVEDI",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 5,
                name: "MR. KULDEEP SINGH KHANGAROT",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 6,
                name: "LOKESH SINGH RATHORE",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
            ],
          },
          {
            state: "Uttar Pradesh",
            schools: [
              {
                id: 7,
                name: "VIJAY PRATAP SINGH",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 8,
                name: "MR. RISHAB RANA",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 9,
                name: "SUBODH SINGH",
                profileImage: "/school.png",
                city: "Morbi",
              },
            ],
          },
          {
            state: "Jammu & Kashmir",
            schools: [
              {
                id: 10,
                name: "RISHI KAUL",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 11,
                name: "MR. THAKUR SHARVAN BADYAL",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 12,
                name: "PREETI MAHAJAN",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
            ],
          },
          {
            state: "Delhi",
            schools: [
              {
                id: 13,
                name: "NAVEEN CHANDRA NARAYAN",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 14,
                name: "KUMAR RAJENDRA",
                profileImage: "/school.png",
                city: "Morbi",
              },
              {
                id: 15,
                name: "MANOJ ADHIKARI",
                profileImage: "/school.png",
                city: "Morbi",
              },
            ],
          },
          {
            state: "Madhya Pradesh",
            schools: [
              {
                id: 16,
                name: "MS. EKTA THAKUR",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 17,
                name: "LOKENDRA SINGH",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 18,
                name: "VAQAR QUERESI",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
            ],
          },
          {
            state: "Gujrat",
            schools: [
              {
                id: 19,
                name: "MAHIMA SINGH",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 20,
                name: "PRATIYUSH ARCHANA GUPTA",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
              {
                id: 21,
                name: "ABBAS KHAN",
                profileImage: "/school.png",
                city: "Hanumangarh",
              },
            ],
          },
        ];

        // Try API call, fallback to static data
        let finalData = staticTestData;

        if (isMounted) {
          console.log("📋 Setting final data:", finalData);
          setStatesData(finalData);

          // Force multiple renders to ensure visibility
          setTimeout(() => forceRender(), 100);
          setTimeout(() => forceRender(), 500);
        }
      } catch (error) {
        console.error("💥 Complete error:", error);
        if (isMounted) {
          // Even on error, show static data
          setStatesData([
            {
              state: "Gujarat",
              schools: [
                {
                  id: "1",
                  name: "Test School",
                  profileImage: "/school.png",
                  city: "Test",
                },
              ],
            },
            {
              state: "Rajasthan",
              schools: [
                {
                  id: "2",
                  name: "Test School 2",
                  profileImage: "/school.png",
                  city: "Test2",
                },
              ],
            },
          ]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Force visibility after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.display = "block";
        containerRef.current.style.visibility = "visible";
        containerRef.current.style.opacity = "1";
        forceRender();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [statesData]);

  const handleStateClick = (idx: number) => {
    console.log("🖱️ State clicked:", idx, statesData[idx]);
    setActiveState(activeState === idx ? null : idx);
  };

  const handleSchoolClick = (schoolId: string) => {
    console.log("🏫 School clicked:", schoolId);
    router.push(`/SchoolDetails/${schoolId}`);
  };

  // Loading state
  if (isLoading) {
    return (
      // 🎯 STANDARD SPACING + EXACT NAVBAR ALIGNMENT - Loading State
      <section className="homepage-section">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
          <div className="bg-[#1C1F24] rounded-lg flex justify-center items-center h-[400px]">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-xl">Loading Schools Data...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    // 🎯 STANDARD SPACING + EXACT NAVBAR ALIGNMENT - Main Section
    <section
      key={`section-${renderKey}`}
      className="homepage-section bg-[#EDD8B5]"
      style={{ display: "block", visibility: "visible", opacity: 1 }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        {/* Dark background container */}
        <div className="rounded-lg px-6 sm:px-8 lg:px-12 py-12 lg:py-16 min-h-[600px]">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - States List */}
            <div
              ref={containerRef}
              className="w-full lg:w-1/2 space-y-4"
              style={{
                display: "block",
                visibility: "visible",
                opacity: 1,
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Render states directly - no complex logic */}
              {statesData && statesData.length > 0 ? (
                statesData.map((state, idx) => {
                  const isActive = activeState === idx;
                  const schoolCount = state.schools ? state.schools.length : 0;

                  return (
                    <div
                      key={`state-${state.state}-${idx}-${renderKey}`}
                      className="bg-white rounded-xl shadow-lg overflow-hidden w-full transition-all duration-300 hover:shadow-xl"
                      style={{
                        display: "block",
                        visibility: "visible",
                        position: "relative",
                        zIndex: 5,
                      }}
                    >
                      {/* State Header */}
                      <div
                        className="flex items-center justify-between px-4 sm:px-6 py-4 cursor-pointer bg-white hover:bg-gray-50"
                        onClick={() => handleStateClick(idx)}
                        style={{ minHeight: "80px" }}
                      >
                        <div className="flex-1">
                          <h3
                            className={`font-poppins text-black font-medium transition-all duration-300 ${
                              isActive
                                ? "text-2xl sm:text-3xl"
                                : "text-xl sm:text-2xl"
                            }`}
                          >
                            {state.state}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {schoolCount} representative
                            {schoolCount !== 1 ? "s" : ""}{" "}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3">
                          {/* State Map Icon */}
                          {/* <div className="relative">
                            <Image
                              src={getStateIcon(state.state)}
                              alt={`${state.state} map`}
                              width={isActive ? 48 : 32}
                              height={isActive ? 48 : 32}
                              className="object-contain transition-all duration-300 filter drop-shadow-sm"
                              onError={(e) => {
                                e.currentTarget.src = '/homePage/map.png';
                              }}
                            />
                          </div> */}

                          <div
                            className={`transform transition-transform duration-300 ${
                              isActive ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Schools List */}
                      {isActive &&
                        state.schools &&
                        state.schools.length > 0 && (
                          <div
                            className="bg-gray-50 px-4 sm:px-6 py-4 border-t"
                            style={{
                              display: "block",
                              visibility: "visible",
                            }}
                          >
                            <h4 className="text-gray-800 font-medium mb-3">
                              Representatives in {state.state}:
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                              {state.schools.map(
                                (school: any, sIdx: number) => (
                                  <div
                                    key={`school-${school.id}-${sIdx}`}
                                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                                    onClick={() => handleSchoolClick(school.id)}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                                        <Image
                                          src={
                                            school.profileImage || "/school.png"
                                          }
                                          alt={school.name}
                                          width={48}
                                          height={48}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                            e.currentTarget.src = "/school.png";
                                          }}
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate">
                                          {school.name}
                                        </p>
                                      </div>
                                      <svg
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {/* Empty state for schools */}
                      {isActive &&
                        (!state.schools || state.schools.length === 0) && (
                          <div className="bg-gray-50 px-4 sm:px-6 py-8 border-t text-center">
                            <p className="text-gray-500">
                              No schools available in {state.state}
                            </p>
                          </div>
                        )}
                    </div>
                  );
                })
              ) : (
                <div className="bg-white rounded-xl p-8 text-center">
                  <p className="text-gray-600 text-lg">
                    No states data available
                  </p>
                </div>
              )}
            </div>

            {/* Right Column - Title & Map */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-[30px] font-poppins font-medium text-black mb-4 lg:mb-6 leading-tight">
                Our State Representation And Global Tie up
              </h2>

              <div className="w-full max-w-[500px]">
                <Image
                  src="/stateRep/map.png"
                  alt="India Map showing Sainik School locations"
                  width={500}
                  height={450}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationwideFootprint;
