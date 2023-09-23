import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentClient } from "../../atoms/client";

export default function ClientDetails() {
  const client = useRecoilValue(currentClient);

  return <div>{client.}</div>;
}
