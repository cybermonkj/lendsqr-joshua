import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const Sidebar = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="flex flex-col justify-start sm:ml-[15px] md:ml-[20px] ml-[30px] sm:w-[100%] w-[73%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
            <Img
              src="defaultNoData.png"
              className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash"
            />
            <Text className="font-normal font-worksans not-italic text-[16px] text-indigo_800 w-[auto]">
              {props?.switchButtun}
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] mb-[3px] mt-[2px] w-[14px] sm:w-[7px] md:w-[9px]"
              alt="arrowdown"
            />
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[2px] w-[15%]"
              alt="home"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Dashboard
            </Text>
          </Row>
          <Text className="font-medium font-worksans sm:mt-[21px] md:mt-[28px] mt-[41px] text-[12px] text-bluegray_600 w-[auto]">
            CUSTOMERS
          </Text>
        </Column>
        <Row className="bg-colors flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] md:pr-[125px] sm:pr-[15px] pr-[183px] w-[100%]">
          <Line className="bg-cyan_400 sm:h-[22px] md:h-[28px] h-[40px] w-[3px]" />
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[11px] md:mb-[7px] md:ml-[18px] ml-[27px] mt-[10px] md:mt-[6px] sm:mx-[0] sm:my-[5px] sm:px-[0] sm:w-[100%] w-[70%]">
            <Img
              src="images/img_user.svg"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[23%]"
              alt="user"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Users
            </Text>
          </Row>
        </Row>
        <Column className="flex flex-col justify-start mb-[2px] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:w-[100%] w-[63%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[15%]"
              alt="user One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Guarantors
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Loans
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] mb-[1px] mt-[3px] w-[13%]"
              alt="handshakeregul"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Decision Models
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[2px] w-[19%]"
              alt="piggybankOne"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Savings
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] w-[13%]"
              alt="reply"
            />
            <Text className="flex-grow font-normal font-worksans mb-[2px] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[1px] not-italic text-[16px] text-indigo_800">
              Loan Requests
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[17%]"
              alt="user Two"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Whitelist
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[21%]"
              alt="user Three"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Karma
            </Text>
          </Row>
          <Text className="font-medium font-worksans ml-[3px] sm:mt-[21px] md:mt-[28px] mt-[41px] text-[12px] text-bluegray_600 w-[auto]">
            BUSINESSES
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="trash Two"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Organization
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] w-[13%]"
              alt="reply One"
            />
            <Text className="flex-grow font-normal font-worksans mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-[16px] text-indigo_800">
              Loan Products
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="home One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Savings Products
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="globe"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Fees and Charges
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] mt-[1px] w-[13%]"
              alt="bookmark"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Transactions
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="reply Two"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Services
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[11%]"
              alt="settings"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Service Account
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] my-[3px] w-[14%]"
              alt="bookmark One"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Settlements
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
            <Img
              src="images/img_volume.svg"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="volume"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Reports
            </Text>
          </Row>
          <Text className="font-medium font-worksans ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[12px] text-bluegray_600 w-[auto]">
            SETTINGS
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[1px] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="sort"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Preferences
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mb-[2px] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="badgepercentOne"
            />
            <Text className="flex-grow font-normal font-worksans ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Fees and Pricing
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 max-w-[100%] w-[15%]"
              alt="clipboardlist"
            />
            <Text className="flex-grow font-normal font-worksans mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[2px] not-italic text-[16px] text-indigo_800">
              Audit Logs
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[2px] md:w-[11px] w-[16px] sm:w-[8px]"
              alt="car"
            />
            <Text className="flex-grow font-normal font-worksans mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-[16px] text-indigo_800">
              Systems Messages
            </Text>
          </Row>
          <Text className="font-normal font-worksans ml-[3px] md:mt-[103px] mt-[151px] sm:mt-[80px] not-italic text-[12px] text-indigo_800 w-[auto]">
            v1.2.0
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default Sidebar;
