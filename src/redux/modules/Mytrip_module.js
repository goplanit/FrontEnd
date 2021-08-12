import { createSlice } from "@reduxjs/toolkit";
import { config } from "../../shared/config";

const initialState = {
  email: null,
  pwd: null,
  emailCheck: false,
  nickName: null,
  nickNameCheck: false,
  phoneAuthCheck: false,
  phoneAuthConfirm: false,
  phoneAuth: null,
  socialId: null,
  is_login: false,
  is_loading: false,
};