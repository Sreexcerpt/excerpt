import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React__default, { useState, useMemo, useCallback } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { H as HelmetExport } from "../entry-server.js";
import "react-dom/server";
import "react-router";
import "prop-types";
import "react-side-effect";
import "react-fast-compare";
import "object-assign";
import "clsx";
import "@mui/utils/composeClasses";
import "@mui/utils/capitalize";
import "@mui/system";
import "@mui/utils/generateUtilityClasses";
import "@mui/utils/generateUtilityClass";
import "@mui/system/DefaultPropsProvider";
import "@mui/system/createStyled";
import "@mui/utils/formatMuiErrorMessage";
import "@mui/utils/deepmerge";
import "@mui/system/colorManipulator";
import "@mui/system/spacing";
import "@mui/system/cssVars";
import "@mui/system/styleFunctionSx";
import "@mui/system/createTheme";
import "@mui/utils/ClassNameGenerator";
import "@mui/utils/resolveProps";
import "@mui/utils/useId";
import "@mui/utils/refType";
import "@mui/utils/elementTypeAcceptingRef";
import "@mui/utils/isFocusVisible";
import "@mui/utils/useForkRef";
import "@mui/utils/useEventCallback";
import "react-transition-group";
import "@mui/utils/useTimeout";
import "@mui/utils/useLazyRef";
import "@mui/utils/chainPropTypes";
import "@mui/utils/appendOwnerState";
import "@mui/utils/resolveComponentProps";
import "@mui/utils/mergeSlotProps";
import "@mui/utils/integerPropType";
import "@mui/utils/elementAcceptingRef";
import "@mui/utils/getReactElementRef";
import "@mui/utils/HTMLElementType";
import "@mui/utils/ownerDocument";
import "@mui/utils/createChainedFunction";
import "@mui/utils/extractEventHandlers";
import "@mui/utils/ownerWindow";
import "@mui/utils/getScrollbarSize";
import "react-dom";
import "@mui/utils/useEnhancedEffect";
import "@mui/utils/setRef";
import "@mui/utils/exactProp";
import "@mui/utils/isHostComponent";
import "@mui/utils/debounce";
import "react-is";
import "@mui/system/RtlProvider";
import "@mui/utils/useSlotProps";
import "@mui/utils/useControlled";
import "@mui/utils/isMuiElement";
import "@mui/utils/unsupportedProp";
import "pdf-lib";
import "@pdf-lib/fontkit";
import "qrcode";
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const containerStyle = useMemo(
    () => ({
      height: "400px"
    }),
    []
  );
  const formContainerStyle = useMemo(
    () => ({
      marginTop: "10%",
      marginLeft: "auto",
      marginRight: "auto"
    }),
    []
  );
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isLoading) return;
      setIsLoading(true);
      try {
        const response = await axios.post("http://localhost:8080/api/login", formData, {
          timeout: 5e3
          // Add timeout to prevent hanging requests
        });
        const { role } = response.data;
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2e3,
          onClose: () => {
            if (role === "admin") {
              onLogin(true);
              navigate("/");
            }
          }
        });
      } catch (error) {
        console.error("Login error:", error);
        let errorMessage = "Login failed. Please check your credentials.";
        if (error.code === "ECONNABORTED") {
          errorMessage = "Request timed out. Please try again.";
        } else if (error.response?.status === 401) {
          errorMessage = "Invalid email or password.";
        } else if (!error.response) {
          errorMessage = "Network error. Please check your connection.";
        }
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3e3
        });
      } finally {
        setIsLoading(false);
      }
    },
    [formData, isLoading, onLogin, navigate]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Login - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Login to your account at Excerpt Technologies Private Limited."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "wrapper login-1", style: containerStyle, children: /* @__PURE__ */ jsxs("div", { className: "lcontainer", style: formContainerStyle, children: [
      /* @__PURE__ */ jsx("div", { className: "col-left", children: /* @__PURE__ */ jsxs("div", { className: "login-text", children: [
        /* @__PURE__ */ jsx("h2", { children: "Welcome Back" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Create your account.",
          /* @__PURE__ */ jsx("br", {})
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/register", className: "btn", children: "Sign Up" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-right", children: /* @__PURE__ */ jsxs("div", { className: "login-form", children: [
        /* @__PURE__ */ jsx("h2", { children: "Login" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              placeholder: "Email",
              value: formData.email,
              onChange: handleChange,
              required: true,
              disabled: isLoading,
              autoComplete: "email"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              name: "password",
              placeholder: "Password",
              value: formData.password,
              onChange: handleChange,
              required: true,
              disabled: isLoading,
              autoComplete: "current-password"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isLoading,
              style: {
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "pointer"
              },
              children: isLoading ? "Logging in..." : "Login"
            }
          ) }),
          /* @__PURE__ */ jsx("p", {})
        ] }),
        /* @__PURE__ */ jsx(
          ToastContainer,
          {
            position: "top-right",
            autoClose: 3e3,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            limit: 3
          }
        )
      ] }) })
    ] }) })
  ] });
};
const Login$1 = React__default.memo(Login);
export {
  Login$1 as default
};
