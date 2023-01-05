import React from "react";

import { Column, Row, Button, Text, Stack, Img, Line, List } from "components";
import Userdetails from "components/Userdetails";
import FullUserDetails from "components/FullUserDetails";
import { useNavigate } from "react-router-dom";
import { getUsers } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UsersgeneraldetailsPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { path: { "id=[]": "1" } };

    getUsers(req)
      .then((res) => {
        setapiData(res);

        localStorage.setItem("createdAt", JSON.stringify(res?.createdAt));

        localStorage.setItem("orgName", JSON.stringify(res?.orgName));

        localStorage.setItem("email", JSON.stringify(res?.email));

        localStorage.setItem("phoneNumber", JSON.stringify(res?.phoneNumber));

        localStorage.setItem("lastactive", JSON.stringify(res?.lastActiveDate));

        localStorage.setItem(
          "phoneNumber",
          JSON.stringify(res?.profile?.phoneNumber)
        );

        localStorage.setItem("avatar", JSON.stringify(res?.profile?.avatar));

        localStorage.setItem("gender", JSON.stringify(res?.profile?.gender));

        localStorage.setItem("b22782986", JSON.stringify(res?.profile?.bvn));

        localStorage.setItem("address", JSON.stringify(res?.profile?.address));

        localStorage.setItem(
          "currency",
          JSON.stringify(res?.profile?.currency)
        );

        localStorage.setItem(
          "instagram",
          JSON.stringify(res?.socials?.instagram)
        );

        localStorage.setItem("twitter", JSON.stringify(res?.socials?.twitter));

        localStorage.setItem(
          "facebook",
          JSON.stringify(res?.socials?.facebook)
        );

        localStorage.setItem("id", JSON.stringify(res?.id));

        localStorage.setItem("level", JSON.stringify(res?.education?.level));

        toast.success("User ID 1 fetched successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something seems wrong with the Lendsqr MockAPI");
      });
  }
  function handleNavigate() {
    navigate("/usersshowingfilters");
  }
  function handleNavigate1() {
    navigate("/usersgeneraldetails");
  }
  function handleNavigate2() {
    navigate("/usersgeneraldetails");
  }
  function handleNavigate3() {
    const win = window.open(
      "https://docs.adjutor.io/introduction/what-is-adjutor",
      "_blank"
    );
    win.focus();
  }

  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans justify-end mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] shadow-bs1 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1315px] mb-[2px] md:ml-[17px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Button
                  className="cursor-pointer font-normal font-poppins mb-[1px] min-w-[6%] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-[16px] text-center text-gray_51 w-[max-content]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="OutlineLightblue100"
                >
                  Menu
                </Button>
                <Column className="bg-white_A700_6c border border-indigo_800_6c border-solid flex flex-col font-worksans items-end justify-start md:ml-[120px] ml-[175px] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] md:pl-[12px] sm:pl-[15px] pl-[18px] rounded-radius8 sm:w-[100%] w-[31%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic px-[px] text-bluegray_600_99 w-[300px]"
                      as="h6"
                      variant="h6"
                    >
                      Search for anything
                    </Text>
                    <Stack className="bg-cyan_400 h-[40px] sm:ml-[102px] md:ml-[132px] ml-[192px] p-[12px] sm:p-[6px] md:p-[8px] relative rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[15%]">
                      <Img
                        src="images/img_search.svg"
                        className="absolute bottom-[30%] h-[14px] inset-x-[0] max-w-[100%] mx-[auto] w-[24%]"
                        alt="search"
                      />
                    </Stack>
                  </Row>
                </Column>
                <a
                  href={"javascript:"}
                  className="common-pointer font-normal font-roboto sm:ml-[189px] md:ml-[244px] ml-[356px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-[16px] text-indigo_800 underline w-[auto]"
                  onClick={handleNavigate3}
                  rel="noreferrer"
                >
                  Docs
                </a>
                <Img
                  src="images/img_notification.svg"
                  className="sm:h-[14px] md:h-[18px] h-[26px] max-w-[100%] sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:w-[13px] md:w-[17px] w-[26px]"
                  alt="notification"
                />
                <Img
                  src="images/img_image4.png"
                  className="common-pointer sm:h-[26px] md:h-[34px] h-[48px] mb-[10px] sm:mb-[5px] md:mb-[6px] sm:ml-[12px] md:ml-[15px] ml-[23px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  onClick={handleNavigate1}
                  alt="imageFour"
                />
                <Text
                  className="common-pointer font-medium font-worksans ml-[13px] sm:ml-[6px] md:ml-[8px] md:mt-[12px] mt-[18px] sm:mt-[9px] text-indigo_800 w-[auto]"
                  as="h5"
                  variant="h5"
                  onClick={handleNavigate2}
                >
                  Adedeji
                </Text>
                <Img
                  src="images/img_npdropdown615.svg"
                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] ml-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="npdropdown615"
                />
              </Row>
            </Row>
          </header>
        </Column>
        <Column className="flex flex-col items-end sm:mt-[45px] md:mt-[58px] mt-[85px] md:px-[100px] px-[146px] sm:px-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-end max-w-[1077px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Row
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]"
                  onClick={handleNavigate}
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                    alt="arrowleft"
                  />
                  <Text
                    className="flex-grow font-normal ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                    as="h5"
                    variant="h5"
                  >
                    Back to Users
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    User Details
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold min-w-[17%] sm:ml-[284px] md:ml-[367px] ml-[534px] text-[14px] text-center text-pink_A400 md:tracking-ls11 sm:tracking-ls11 tracking-ls14000000000000001 uppercase w-[max-content]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlinePinkA400"
                  >
                    Blacklist User
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[17%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-center text-cyan_400 md:tracking-ls11 sm:tracking-ls11 tracking-ls14000000000000001 uppercase w-[max-content]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineCyan400_1"
                  >
                    Activate User
                  </Button>
                </Row>
              </Column>
              <Stack className="h-[2079px] sm:mt-[25px] md:mt-[32px] mt-[47px] relative w-[100%]">
                <Column className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[0] sm:w-[100%] w-[97%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col items-center justify-end sm:p-[2px] md:p-[3px] p-[5px] rounded-radius4 shadow-bs2 w-[100%]">
                      <Userdetails
                        className="flex flex-col justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]"
                        id="LSQFf587g90"
                        tier="User’s Tier"
                        balance="₦200,000.00"
                        account="9912345678/Providus Bank"
                      />
                    </Column>
                    <FullUserDetails
                      className="flex flex-col justify-start sm:mt-[28px] md:mt-[36px] mt-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]"
                      FullName="Grace Effiom"
                      phoneNumber="07060780922"
                      email="grace@gmail.com"
                      bvn="07060780922"
                      gender="Female"
                      marritalstatus="Single"
                      numberOfChildren="None"
                      residenceType="Parent’s Apartment"
                      levelofEducation="B.Sc"
                      employmenStatus="Employed"
                      employmentSector="FinTech"
                      employmentDuration="2 years"
                      officeEmail="grace@lendsqr.com"
                      monthlyIncome="₦200,000.00- ₦400,000.00"
                      loanRepayment="40,000"
                      twitterUsername="@grace_effiom"
                      facebookUsername="Grace Effiom"
                      instagramUsername="@grace_effiom"
                      guarantoName="Debby Ogana"
                      guarantorPhone="07060780922"
                      guarantorEmail="debby@gmail.com"
                      guarantorRelationship="Sister"
                      gaurantorname="Debby Ogana"
                    />
                  </Column>
                </Column>
                <div className="absolute border border-deep_purple_A200 border-solid bottom-[0] sm:h-[1002px] md:h-[1294px] h-[1880px] rounded-radius5 w-[100%]"></div>
              </Stack>
            </Column>
          </Column>
        </Column>
      </Column>
      <ToastContainer />
    </>
  );
};

export default UsersgeneraldetailsPage;
