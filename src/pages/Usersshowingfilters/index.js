import React from "react";

import {
  Column,
  Row,
  Button,
  Text,
  Stack,
  Img,
  List,
  Line,
  SelectBox,
  Input,
} from "components";

const UsersshowingfiltersPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-worksans justify-start mx-[auto] sm:py-[4px] md:py-[6px] py-[9px] w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[20px] shadow-bs1 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1315px] mb-[2px] md:ml-[6px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Button
                  className="cursor-pointer font-normal font-poppins mb-[1px] min-w-[6%] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-[16px] text-center text-gray_51 w-[max-content]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillLightblue900"
                >
                  Menu
                </Button>
                <Column className="bg-white_A700_6c border border-indigo_800_6c border-solid flex flex-col font-worksans items-end justify-start md:ml-[120px] ml-[175px] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] md:pl-[12px] sm:pl-[15px] pl-[18px] rounded-radius8 sm:w-[100%] w-[31%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_600_99 w-[auto]"
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
        <Column className="flex flex-col justify-start max-w-[1070px] sm:mb-[4px] md:mb-[5px] mb-[8px] md:ml-[107px] sm:ml-[83px] ml-[auto] mr-[auto] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="font-medium text-indigo_800 w-[auto]"
            as="h2"
            variant="h2"
          >
            Users
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[32px] mt-[47px] w-[100%]">
            <List
              className="sm:gap-[14px] md:gap-[18px] gap-[26.82px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[14px] sm:p-[15px] p-[21px] rounded-radius4 shadow-bs2 w-[100%]">
                <Button
                  className="flex items-center justify-center sm:ml-[4px] md:ml-[6px] ml-[9px] w-[20%]"
                  shape="icbCircleBorder20"
                  size="smIcn"
                  variant="icbFillPurpleA40063"
                >
                  <Img
                    src="images/img_icon_43X41.svg"
                    className="flex items-center justify-center"
                    alt="icon"
                  />
                </Button>
                <Text
                  className="font-medium sm:ml-[4px] md:ml-[6px] ml-[9px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_600 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Users
                </Text>
                <Text
                  className="font-semibold sm:ml-[4px] md:ml-[6px] ml-[9px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  2,453
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[14px] sm:p-[15px] p-[21px] rounded-radius4 shadow-bs2 w-[100%]">
                <Button
                  className="flex items-center justify-center sm:ml-[4px] md:ml-[6px] ml-[9px] w-[20%]"
                  shape="icbCircleBorder20"
                  size="smIcn"
                  variant="icbFillDeeppurpleA40063"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center"
                    alt="clock"
                  />
                </Button>
                <Text
                  className="font-medium sm:ml-[4px] md:ml-[6px] ml-[9px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_600 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Active Users
                </Text>
                <Text
                  className="font-semibold sm:ml-[4px] md:ml-[6px] ml-[9px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  2,453
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-start md:p-[14px] sm:p-[15px] p-[21px] rounded-radius4 shadow-bs2 w-[100%]">
                <Button
                  className="flex items-center justify-center sm:ml-[4px] md:ml-[6px] ml-[9px] w-[20%]"
                  shape="icbCircleBorder20"
                  size="smIcn"
                  variant="icbFillRed40063"
                >
                  <Img
                    src="images/img_nploan1243991.svg"
                    className="flex items-center justify-center"
                    alt="nploan1243991"
                  />
                </Button>
                <Text
                  className="font-medium sm:ml-[4px] md:ml-[6px] ml-[9px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_600 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Users with Loans
                </Text>
                <Text
                  className="font-semibold sm:ml-[4px] md:ml-[6px] ml-[9px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  12,453
                </Text>
              </Column>
            </List>
            <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col sm:mx-[0] md:p-[14px] sm:p-[15px] p-[21px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[24%]">
              <Img
                src="images/img_volume.svg"
                className="max-w-[100%] sm:ml-[4px] md:ml-[6px] ml-[9px] w-[20%]"
                alt="volume"
              />
              <Text
                className="font-medium sm:ml-[4px] md:ml-[6px] ml-[9px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_600 uppercase w-[auto]"
                as="h6"
                variant="h6"
              >
                Users with Savings
              </Text>
              <Text
                className="font-semibold sm:ml-[4px] md:ml-[6px] ml-[9px] my-[11px] sm:my-[5px] md:my-[7px] text-indigo_800 uppercase w-[auto]"
                as="h2"
                variant="h2"
              >
                102,453
              </Text>
            </Column>
          </Row>
          <Stack className="h-[965px] md:mt-[11px] mt-[16px] sm:mt-[8px] relative w-[100%]">
            <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="bg-white_A700 border border-indigo_800_0f border-solid flex flex-col justify-end sm:p-[15px] md:p-[18px] p-[27px] rounded-radius4 shadow-bs2 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] mr-[auto] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                      <Text
                        className="flex-grow font-semibold mt-[3px] text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        organization
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[24px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                      <Text
                        className="flex-grow font-semibold mt-[3px] text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        Username
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter One"
                      />
                    </Row>
                    <Text
                      className="font-semibold sm:ml-[25px] md:ml-[33px] ml-[48px] mt-[3px] text-bluegray_600 uppercase w-[auto]"
                      variant="body1"
                    >
                      Email
                    </Text>
                    <Img
                      src="images/img_filter.svg"
                      className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[11px] sm:ml-[5px] md:ml-[7px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="filter Two"
                    />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[121px] md:ml-[83px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                      <Text
                        className="flex-grow font-semibold mt-[3px] text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        Phone number
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[13px] sm:ml-[6px] md:ml-[8px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter Three"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[24px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Text
                        className="flex-grow font-semibold mt-[3px] text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        Date joined
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter Four"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[59px] ml-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Text
                        className="flex-grow font-semibold mt-[3px] text-bluegray_600 uppercase"
                        variant="body1"
                      >
                        Status
                      </Text>
                      <Img
                        src="images/img_filter.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="filter Five"
                      />
                    </Row>
                  </Row>
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:px-[0] w-[100%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_600 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Lendsqr
                        </Text>
                        <Text
                          className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_600 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Adedeji
                        </Text>
                        <Text
                          className="font-normal sm:ml-[50px] md:ml-[65px] ml-[95px] not-italic text-bluegray_600 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          adedeji@lendsqr.com
                        </Text>
                        <Text
                          className="font-normal sm:ml-[22px] md:ml-[28px] ml-[42px] not-italic text-bluegray_600 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          08078903721
                        </Text>
                        <Text
                          className="font-normal sm:ml-[40px] md:ml-[52px] ml-[76px] not-italic text-bluegray_600 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          May 15, 2020 10:00 AM
                        </Text>
                        <Button
                          className="cursor-pointer font-normal min-w-[9%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                          shape="RoundedBorder15"
                          size="sm"
                          variant="FillBluegray6005f"
                        >
                          Inactive
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="overflowmenu"
                        />
                      </Row>
                      <Line className="bg-indigo_800_19 h-[1.04px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                    </Column>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Irorun
                    </Text>
                    <Text
                      className="font-normal ml-[115px] sm:ml-[61px] md:ml-[79px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Debby Ogana
                    </Text>
                    <Text
                      className="font-normal sm:ml-[29px] md:ml-[37px] ml-[55px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      debby2@irorun.com
                    </Text>
                    <Text
                      className="font-normal sm:ml-[27px] md:ml-[35px] ml-[51px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      08160780928
                    </Text>
                    <Text
                      className="font-normal sm:ml-[39px] md:ml-[50px] ml-[74px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Apr 30, 2020 10:00 AM
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[10%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-amber_600 text-center w-[max-content]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="FillAmber60063"
                    >
                      Pending
                    </Button>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[24px] md:ml-[31px] ml-[46px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="overflowmenu One"
                    />
                  </Row>
                  <List
                    className="md:gap-[11px] gap-[16.57px] sm:gap-[8px] grid min-h-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lendstar
                          </Text>
                          <Text
                            className="font-normal sm:ml-[50px] md:ml-[64px] ml-[94px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Grace Effiom
                          </Text>
                          <Text
                            className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            grace@lendstar.com
                          </Text>
                          <Text
                            className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            07060780922
                          </Text>
                          <Text
                            className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Apr 30, 2020 10:00 AM
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[11%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-center text-pink_A400 w-[max-content]"
                            shape="RoundedBorder15"
                            size="sm"
                            variant="FillPinkA40063"
                          >
                            Blacklisted
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[19px] md:ml-[24px] ml-[36px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="overflowmenu Two"
                          />
                        </Row>
                        <Line className="bg-indigo_800_19 h-[1.04px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                    <Line className="self-center w-[100%] h-[1.04px] bg-indigo_800_19" />
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lendsqr
                          </Text>
                          <Text
                            className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Tosin Dokunmu
                          </Text>
                          <Text
                            className="font-normal sm:ml-[21px] md:ml-[27px] ml-[40px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            tosin@lendsqr.com
                          </Text>
                          <Text
                            className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            07003309226
                          </Text>
                          <Text
                            className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Apr 10, 2020 10:00 AM
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[10%] sm:ml-[24px] md:ml-[31px] ml-[46px] not-italic text-[14px] text-amber_600 text-center w-[max-content]"
                            shape="RoundedBorder15"
                            size="sm"
                            variant="FillAmber60063"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[24px] md:ml-[31px] ml-[46px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="overflowmenu Three"
                          />
                        </Row>
                        <Line className="bg-indigo_800_19 h-[1.04px] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]" />
                      </Column>
                    </Column>
                    <Line className="self-center w-[100%] h-[1.04px] bg-indigo_800_19" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Lendstar
                      </Text>
                      <Text
                        className="font-normal sm:ml-[50px] md:ml-[64px] ml-[94px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                      <Text
                        className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                      <Text
                        className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                      <Text
                        className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[8%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillGreen5005f"
                      >
                        Active
                      </Button>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[35px] md:ml-[46px] ml-[67px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="overflowmenu Four"
                      />
                    </Row>
                  </List>
                  <List
                    className="md:gap-[11px] gap-[16.57px] sm:gap-[8px] grid min-h-[auto] sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lendsqr
                          </Text>
                          <Text
                            className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Tosin Dokunmu
                          </Text>
                          <Text
                            className="font-normal sm:ml-[21px] md:ml-[27px] ml-[40px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            tosin@lendsqr.com
                          </Text>
                          <Text
                            className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            08060780900
                          </Text>
                          <Text
                            className="font-normal sm:ml-[37px] md:ml-[48px] ml-[70px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Apr 10, 2020 10:00 AM
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[8%] sm:ml-[24px] md:ml-[31px] ml-[46px] not-italic text-[14px] text-center text-green_500 w-[max-content]"
                            shape="RoundedBorder15"
                            size="sm"
                            variant="FillGreen5005f"
                          >
                            Active
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[35px] md:ml-[46px] ml-[67px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="overflowmenu Five"
                          />
                        </Row>
                        <Line className="bg-indigo_800_19 h-[1.04px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                    <Line className="self-center w-[100%] h-[1.04px] bg-indigo_800_19" />
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lendstar
                          </Text>
                          <Text
                            className="font-normal sm:ml-[50px] md:ml-[64px] ml-[94px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Grace Effiom
                          </Text>
                          <Text
                            className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            grace@lendstar.com
                          </Text>
                          <Text
                            className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            07060780922
                          </Text>
                          <Text
                            className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] not-italic text-bluegray_600 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Apr 30, 2020 10:00 AM
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[11%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-center text-pink_A400 w-[max-content]"
                            shape="RoundedBorder15"
                            size="sm"
                            variant="FillPinkA40063"
                          >
                            Blacklisted
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[19px] md:ml-[24px] ml-[36px] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="overflowmenu Six"
                          />
                        </Row>
                        <Line className="bg-indigo_800_19 h-[1.04px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                  </List>
                  <List
                    className="sm:gap-[18px] md:gap-[23px] gap-[34.18px] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Lendsqr
                      </Text>
                      <Text
                        className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tosin Dokunmu
                      </Text>
                      <Text
                        className="font-normal sm:ml-[21px] md:ml-[27px] ml-[40px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        tosin@lendsqr.com
                      </Text>
                      <Text
                        className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        08060780900
                      </Text>
                      <Text
                        className="font-normal sm:ml-[37px] md:ml-[48px] ml-[70px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 10, 2020 10:00 AM
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[9%] sm:ml-[24px] md:ml-[31px] ml-[46px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillBluegray6005f"
                      >
                        Inactive
                      </Button>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="overflowmenu Seven"
                      />
                    </Row>
                    <Line className="self-center w-[100%] h-[1.04px] bg-indigo_800_19" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end w-[100%]">
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Lendstar
                      </Text>
                      <Text
                        className="font-normal sm:ml-[50px] md:ml-[64px] ml-[94px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Grace Effiom
                      </Text>
                      <Text
                        className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        grace@lendstar.com
                      </Text>
                      <Text
                        className="font-normal sm:ml-[26px] md:ml-[33px] ml-[49px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        07060780922
                      </Text>
                      <Text
                        className="font-normal sm:ml-[38px] md:ml-[49px] ml-[72px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Apr 30, 2020 10:00 AM
                      </Text>
                      <Button
                        className="cursor-pointer font-normal min-w-[9%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic text-[14px] text-bluegray_600 text-center w-[max-content]"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="FillBluegray6005f"
                      >
                        Inactive
                      </Button>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="overflowmenu Eight"
                      />
                    </Row>
                  </List>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[143px] sm:mt-[76px] md:mt-[98px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Showing
                    </Text>
                    <Button
                      className="flex items-center justify-center min-w-[36%] text-center w-[max-content]"
                      rightIcon={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="ml-[19px] sm:ml-[10px] md:ml-[13px] text-center"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder6"
                      size="md"
                      variant="FillIndigo80019"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-indigo_800">
                        100
                      </div>
                    </Button>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      out of 100
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <Stack className="bg-indigo_800_19 h-[28px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius4 w-[9%]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="absolute h-[16px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[59%]"
                        alt="arrowright"
                      />
                    </Stack>
                    <Text
                      className="font-medium mt-[3px] text-bluegray_600 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                    <Text
                      className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_600_90 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ...
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      15
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_600_90 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      16
                    </Text>
                    <Stack className="bg-indigo_800_19 h-[28px] sm:p-[2px] md:p-[3px] p-[5px] relative rounded-radius4 w-[9%]">
                      <Img
                        src="images/img_arrowright_indigo_800.svg"
                        className="absolute h-[16px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[59%]"
                        alt="arrowright One"
                      />
                    </Stack>
                  </Row>
                </Row>
              </Column>
            </Column>
            <Column className="absolute bg-white_A700 border border-bluegray_600_23 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs2 sm:w-[100%] w-[39%]">
              <Column className="flex flex-col justify-start sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] w-[100%]">
                <Text
                  className="font-medium text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Organization
                </Text>
                <SelectBox
                  className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-[14px] text-bluegray_600_99 w-[100%]"
                  placeholderClassName="text-bluegray_600_99"
                  name="Search One"
                  placeholder="Select"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[21px] mr-[30px] sm:mr-[15px] sm:w-[11px] md:mr-[20px] md:w-[14px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text
                  className="font-medium sm:mt-[14px] md:mt-[18px] mt-[27px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Username
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                  name="Search Two"
                  placeholder="User"
                ></Input>
                <Text
                  className="font-medium sm:mt-[14px] md:mt-[18px] mt-[27px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                  type="email"
                  name="Search Three"
                  placeholder="Email"
                ></Input>
                <Text
                  className="font-medium sm:mt-[14px] md:mt-[18px] mt-[27px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Date
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="flex md:mt-[9px] mt-[14px] sm:mt-[7px] w-[100%]"
                  name="Search Four"
                  placeholder="Date"
                  suffix={
                    <Img
                      src="images/img_calendar.svg"
                      className="ml-[35px] mr-[14px] sm:mr-[7px] sm:ml-[18px] md:mr-[9px] md:ml-[24px] my-[auto]"
                      alt="calendar"
                    />
                  }
                ></Input>
                <Text
                  className="font-medium sm:mt-[14px] md:mt-[18px] mt-[27px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Phone Number
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_600_99 text-bluegray_600_99 w-[100%]"
                  wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                  type="number"
                  name="Search Five"
                  placeholder="Phone Number"
                ></Input>
                <Text
                  className="font-medium sm:mt-[14px] md:mt-[18px] mt-[27px] text-bluegray_600 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Status
                </Text>
                <SelectBox
                  className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-[14px] text-bluegray_600_99 w-[100%]"
                  placeholderClassName="text-bluegray_600_99"
                  name="Search Six"
                  placeholder="Select"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[21px] mr-[30px] sm:mr-[15px] sm:w-[11px] md:mr-[20px] md:w-[14px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[47%] text-[14px] text-bluegray_600 text-center w-[max-content]"
                    shape="RoundedBorder6"
                    size="xl"
                    variant="OutlineBluegray600"
                  >
                    Reset
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[47%] sm:ml-[11px] md:ml-[14px] ml-[21px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="xl"
                    variant="OutlineCyan400"
                  >
                    Filter
                  </Button>
                </Row>
              </Column>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default UsersshowingfiltersPage;
