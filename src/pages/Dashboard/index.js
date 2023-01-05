import React from "react";

import { Column, Row, Button, Text, Stack, Img, List } from "components";

const DashboardPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans justify-start mx-[auto] sm:pb-[15px] md:pb-[663px] pb-[964px] w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] shadow-bs1 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1315px] mb-[2px] md:ml-[6px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                      className="font-normal not-italic text-bluegray_600_99 w-[300px]"
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
                  className="font-normal font-roboto sm:ml-[189px] md:ml-[244px] ml-[356px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-[16px] text-indigo_800 underline w-[auto]"
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
                  className="sm:h-[26px] md:h-[34px] h-[48px] mb-[10px] sm:mb-[5px] md:mb-[6px] sm:ml-[12px] md:ml-[15px] ml-[23px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                  alt="imageFour"
                />
                <Text
                  className="font-medium font-worksans ml-[13px] sm:ml-[6px] md:ml-[8px] md:mt-[12px] mt-[18px] sm:mt-[9px] text-indigo_800 w-[auto]"
                  as="h5"
                  variant="h5"
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
        <Column className="flex flex-col items-end sm:mt-[49px] md:mt-[63px] mt-[92px] px-[133px] sm:px-[15px] md:px-[91px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[1037px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-medium text-indigo_800 w-[auto]"
              as="h2"
              variant="h2"
            >
              Users
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <List
                className="sm:gap-[13px] md:gap-[17px] gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="smIcn"
                    variant="icbFillPurpleA40063"
                  >
                    <Img
                      src="images/img_user.svg"
                      className="h-[22px] sm:h-[12px] md:h-[16px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Users
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2,453
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="smIcn"
                    variant="icbFillDeeppurpleA40063"
                  >
                    <Img
                      src="images/img_icon.svg"
                      className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Active Users
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2,453
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Button
                    className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center ml-[10px] sm:ml-[5px] md:ml-[6px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                    size="smIcn"
                    variant="icbFillRed40063"
                  >
                    <Img
                      src="images/img_nploan1243991.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="nploan1243991"
                    />
                  </Button>
                  <Text
                    className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Users with Loans
                  </Text>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    12,453
                  </Text>
                </Column>
              </List>
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_icon_40X40.svg"
                  className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[21px] md:w-[27px] w-[40px]"
                  alt="icon One"
                />
                <Text
                  className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_600 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Users with Savings
                </Text>
                <Text
                  className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  102,453
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
