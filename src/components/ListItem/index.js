import React from "react";

import { Row, Text, Button, Img } from "components";

const ListItem = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Text className="font-normal font-worksans mb-[7px] mt-[6px] sm:my-[3px] md:my-[4px] not-italic text-[14px] text-bluegray_600 w-[auto]">
          {props?.organization}
        </Text>
        <Text className="font-normal font-worksans mb-[7px] sm:ml-[52px] md:ml-[68px] ml-[99px] mt-[6px] sm:my-[3px] md:my-[4px] not-italic text-[14px] text-bluegray_600 w-[auto]">
          {props?.userName}
        </Text>
        <Text className="font-normal font-worksans mb-[7px] sm:ml-[50px] md:ml-[65px] ml-[95px] mt-[6px] sm:my-[3px] md:my-[4px] not-italic text-[14px] text-bluegray_600 w-[auto]">
          {props?.email}
        </Text>
        <Text className="font-normal font-worksans sm:mb-[4px] md:mb-[6px] mb-[9px] sm:ml-[22px] md:ml-[28px] ml-[42px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-[14px] text-bluegray_600 w-[auto]">
          {props?.phoneNumber}
        </Text>
        <Text className="font-normal font-worksans mb-[7px] sm:ml-[40px] md:ml-[52px] ml-[76px] mt-[6px] sm:my-[3px] md:my-[4px] not-italic text-[14px] text-bluegray_600 w-[auto]">
          {props?.dateJoined}
        </Text>
        <Button
          className="bg-bluegray_600_5f cursor-pointer font-normal font-worksans min-w-[9%] sm:ml-[22px] md:ml-[29px] ml-[43px] not-italic pl-[13px] sm:pl-[6px] md:pl-[8px] md:pr-[10px] pr-[15px] sm:pr-[7px] sm:py-[3px] md:py-[4px] py-[7px] rounded-radius1554 text-[14px] text-bluegray_600 text-center w-[max-content]"
          shape="RoundedBorder15"
          size="PaddingAll7"
          variant="FillBluegray6005f"
          fontStyle="WorkSansRegular14"
        >
          {props?.status}
        </Button>
        <Img
          src="images/img_overflowmenu.svg"
          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[10px] md:w-[13px] w-[20px]"
          alt="overflowmenu"
        />
      </Row>
    </>
  );
};

export default ListItem;
