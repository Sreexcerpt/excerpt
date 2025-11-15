import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { H as HelmetExport } from "../entry-server.js";
import { useNavigate, Link } from "react-router-dom";
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
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    qualification: "",
    gender: "",
    role: "user"
    // default role
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response.data);
      toast.success(`Registration successful!`, {
        position: `top-right`,
        onClose: () => navigate("/login")
        // Navigate to login page after toast is closed
      });
    } catch (error) {
      console.error(error);
      toast.error("Error in registration", { position: "top-right" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Register - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Create an account at Excerpt Technologies Private Limited to explore our services and offerings."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "wrapper login-1", style: { height: "600px" }, children: /* @__PURE__ */ jsxs("div", { className: "lcontainer1", style: { marginTop: "10%", marginLeft: "auto", marginRight: "auto" }, children: [
      /* @__PURE__ */ jsx("div", { className: "col-left", children: /* @__PURE__ */ jsxs("div", { className: "login-text", children: [
        /* @__PURE__ */ jsx("h2", { children: "Welcome" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Create your account.",
          /* @__PURE__ */ jsx("br", {})
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/login", className: "btn", children: "Sign In" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-right", children: /* @__PURE__ */ jsxs("div", { className: "login-form", children: [
        /* @__PURE__ */ jsx("h2", { children: "Register" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "Name", value: formData.name, onChange: handleChange, required: true }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "Email", value: formData.email, onChange: handleChange, required: true }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("input", { type: "password", name: "password", placeholder: "Password", value: formData.password, onChange: handleChange, required: true }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("select", { className: "login-1 login-form input ", name: "gender", value: formData.gender, onChange: handleChange, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select Gender" }),
            /* @__PURE__ */ jsx("option", { value: "male", children: "Male" }),
            /* @__PURE__ */ jsx("option", { value: "female", children: "Female" }),
            /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs(
            "select",
            {
              className: "login-1 login-form input",
              name: "role",
              value: formData.role,
              onChange: handleChange,
              children: [
                /* @__PURE__ */ jsx("option", { value: "user", children: "User" }),
                /* @__PURE__ */ jsx("option", { value: "staff", children: "Staff" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { type: "submit", children: "Register" }) })
        ] }),
        /* @__PURE__ */ jsx(ToastContainer, { position: "top-right", autoClose: 5e3 })
      ] }) })
    ] }) })
  ] });
};
export {
  Register as default
};
