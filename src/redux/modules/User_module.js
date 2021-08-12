import { createSlice } from "@reduxjs/toolkit";
import { config } from "../../shared/config";
import { setCookie } from "../../shared/cookie";
import Swal from "sweetalert2";
import axios from "axios";
import qs from "qs";

import { REDIRECT_URI } from "../../shared/OAuth";

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

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.pwd = action.payload.pwd;
      state.is_login = true;
    },
    emailCheck: (state, action) => {
      state.emailCheck = action.payload.emailCheck;
      state.emailCheck = true;
    },
    nickNameCheck: (state, action) => {
      state.nickNameCheck = action.payload.nickNameCheck;
      state.nickNameCheck = true;
    },
    phoneAuthRequest: (state, action) => {
      state.phoneAuth = action.payload;
      state.phoneAuthCheck = true;
    },
    phoneAuthConfirm: (state, action) => {
      state.phoneAuthConfirm = action.payload.phoneAuthConfirm;
      state.phoneAuthConfirm = true;
    },
    logOut: (state, action) => {
      state.email = null;
      state.nickName = null;
      state.is_login = false;
    },
    loading: (state, action) => {
      state.is_loading = action.payload;
    },
  },
});

//회원가입
const signupDB = (email, nickName, pwd, pwdConfirm, phoneNumber) => {
  console.log(email, nickName, pwd, pwdConfirm, phoneNumber);
  console.log(typeof phoneNumber);
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: `${config.api}/user/join`,
      data: {
        email,
        nickName,
        pwd,
        pwdConfirm,
        phoneNumber,
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.ok);
        if (response.data.ok) {
          Swal.fire({
            title: "가입이 완료되었습니다.",
            icon: "success",
          });
          document.location.href = "/login";
        } else {
          Swal.fire({
            title: "가입이 실패하였습니다.",
            icon: "warning",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//로그인
const loginDB = (email, pwd) => {
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: `${config.api}/user/login`,
      data: {
        email,
        pwd,
      },
    }).then(async (response) => {
      console.log(response);
      const ACCESS_TOKEN = response.data.accessToken;
      const REFRESH_TOKEN = response.data.refreshToken;

      await setCookie("is_login", REFRESH_TOKEN);
      await localStorage.setItem("token", ACCESS_TOKEN);

      if (response.data.ok === false) {
        Swal.fire({
          icon: "warning",
          title: "로그인에 실패했습니다. 아이디 혹은 비밀번호를 확인해주세요.",
          showConfirmButton: false,
          timer: 1400,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "로그인 성공",
          showConfirmButton: false,
          timer: 1400,
        });
        dispatch(
          setUser({
            email: email,
            pwd: pwd,
          })
        );
        document.location.href = "/";
      }
    });
  };
};

// const extensionToken = (state) => {
//   return function (dispatch, getState) {
//     const accessToken = localStorage.getItem("token");
//     const refreshToken = getCookie("is_login");

//     axios({
//       method: "GET",
//       url: `${config.api}/user/refreshtoken`,
//       headers: {
//         Authorization: `Bearer ${refreshToken}`,
//       },
//     })
//       .then(async (response) => {
//         console.log(response)
//         const ACCESS_TOKEN = response.data.activeToken;

//         // 새롭게 받은 access 토큰 로컬에 다시 저장(이전꺼 지우고)
//         await localStorage.clear();
//         await localStorage.setItem("token", ACCESS_TOKEN);

//         // 새롭게 발급받은 ACCESS 토큰 헤더에 담기
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${ACCESS_TOKEN}`;

//         // 현재시간
//         const Current_time = new Date().getTime();

//         // 로그인상태 true 로 변경
//         state = true;

//         // 1분전 자동실행
//         setTimeout(
//           extensionToken(state),
//           Current_time - Current_time - 60000 * 29
//         );
//         return;
//       })
//       .catch((err) => {
//         console.log("연장실패!", err);
//       });
//   };
// };

// 카카오 로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: {
        grant_type: "authorization_code",
        client_id: "3c32552346c4a60826224ae17371fe85",
        redirect_uri: `${REDIRECT_URI}`,
        code: `${code}`,
      },
    }).then((response) => {
      const token = response.data.access_token;
      axios({
        method: "POST",
        url: `${config.api}/user/kakao`,
        data: qs.stringify({
          socialToken: `${token}`,
        }),
      }).then(async (response) => {
        console.log(response);
        const ACCESS_TOKEN = response.data.accessToken;
        const REFRESH_TOKEN = response.data.refreshToken;

        await setCookie("is_login", REFRESH_TOKEN);
        await localStorage.setItem("token", ACCESS_TOKEN);

        document.location.href = "/";
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${ACCESS_TOKEN}`;

        // const is_login = getState().user.is_login;
        // const Current_time = new Date().getTime();

        // setTimeout(extentionAcess());
      });
    });
    // document.location.href = "/";
  };
};

// 네이버로 로그인
const naverLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: "https://nid.naver.com/oauth2.0/token",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: {
        grant_type: "authorization_code",
        client_id: "",
        client_secret: "",
        code: `${code}`,
      },
    }).then(async (response) => {
      const ACCESS_TOKEN = response.data.access_token;
      console.log(ACCESS_TOKEN);
      axios({
        method: "POST",
        url: "https://openapi.naver.com/v1/nid/me",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-type": "application/xml",
        },
      })
        .then(async (response) => {
          console.log(response);
          history.replace("/");
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          window.alert("로그인에 실패하였습니다.");
          history.replace("/");
        });
    });
  };
};

//이메일체크
const emailConfirm = (email) => {
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: `${config.api}/user/confirmexist`,
    })
      .then((response) => {
        console.log(response.data);
        response.data
          ? Swal.fire({
              icon: "success",
              title: "사용가능한 이메일 입니다.",
              showConfirmButton: false,
              timer: 1400,
            })
          : Swal.fire({
              icon: "error",
              title: "중복된 이메일 입니다.",
              showConfirmButton: false,
              timer: 1400,
            });

        dispatch(UserSlice.actions.emailCheck(response.data));
      })
      .catch((err) => {
        console.log("이메일 중복검사 오류", err);
      });
  };
};

//닉네임체크
const nickNameConfirm = (nickName) => {
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: `${config.api}/user/confirmexist`,
    })
      .then((response) => {
        console.log(response.data);
        response.data
          ? Swal.fire({
              icon: "success",
              title: "사용가능한 닉네임 입니다.",
              showConfirmButton: false,
              timer: 1400,
            })
          : Swal.fire({
              icon: "error",
              title: "중복된 닉네임 입니다.",
              showConfirmButton: false,
              timer: 1400,
            });

        dispatch(UserSlice.actions.nickNameCheck(response.data));
      })
      .catch((err) => {
        console.log("닉네임 중복검사 오류", err);
      });
  };
};

const phoneAuthRequest = (phoneNumber) => {
  return function (dispatch, getState) {
    axios({
      method: "POST",
      url: `${config.api}/auth/phone`,
      data: {
        phoneNumber,
      },
    })
      .then((response) => {
        console.log(response.data);
        response.data
          ? Swal.fire({
              icon: "success",
              title: "인증번호가 전송되었습니다.",
              showConfirmButton: false,
              timer: 1400,
            })
          : Swal.fire({
              icon: "error",
              title: "인증요청이 실패되었습니다.",
              showConfirmButton: false,
              timer: 1400,
            });
        dispatch(UserSlice.actions.phoneAuthRequest(response.data));
      })
      .catch((err) => {
        console.log("인증 실패", err);
      });
  };
};

//인증번호 확인
const phoneAuthConfirm = (phoneNumber, code) => {
  return function (dispatch, getState) {
    axios({
      method: "DELETE",
      url: `${config.api}/auth/phoneconfirm`,
      data: {
        phoneNumber,
        code,
      },
    })
      .then((response) => {
        console.log(response.data);
        response.data
          ? Swal.fire({
              icon: "success",
              title: "인증번호가 확인되었습니다..",
              showConfirmButton: false,
              timer: 1400,
            })
          : Swal.fire({
              icon: "error",
              title: "인증번호가 틀렸습니다. 다시 시도해주세요.",
              showConfirmButton: false,
              timer: 1400,
            });
        dispatch(UserSlice.actions.phoneAuthConfirm(response.data));
      })
      .catch((err) => {
        console.log("인증확인 실패", err);
      });
  };
};

export const actionCreators = {
  signupDB,
  loginDB,
  kakaoLogin,
  naverLogin,
  nickNameConfirm,
  emailConfirm,
  phoneAuthRequest,
  phoneAuthConfirm,
};

export const { setUser, logOut, loading } = UserSlice.actions;
export default UserSlice.reducer;
