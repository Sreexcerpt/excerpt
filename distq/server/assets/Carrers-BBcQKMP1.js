import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { H as HelmetExport } from "../entry-server.js";
import "react-dom/server";
import "react-router";
import "react-router-dom";
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
import "axios";
import "react-toastify";
import "pdf-lib";
import "@pdf-lib/fontkit";
import "qrcode";
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
function CarrerBg() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(
    "section",
    {
      style: {
        backgroundImage: "url(images/Newimage/career-1.webp)",
        backgroundColor: "rgb(255, 255, 255)",
        height: "200px"
      },
      class: "sub-header position-relative",
      children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info ", children: [
        /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "Black", textAlign: "center" }, children: "Careers" }),
        /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
          /* @__PURE__ */ jsx("a", { href: "/", style: { color: "Black" }, children: "Home / " }),
          /* @__PURE__ */ jsx("a", { href: "#", style: { color: "Black" }, children: "Careers" })
        ] })
      ] }) })
    }
  ) }) });
}
const JobData = () => {
  const [jobData, setJobData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });
  useEffect(() => {
    fetch("/api/jobdata").then((response) => response.json()).then((data) => setJobData(data)).catch((error) => console.error("Fetch error:", error));
  }, []);
  useEffect(() => {
    let timer;
    if (toast.show) {
      timer = setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 3e3);
    }
    return () => clearTimeout(timer);
  }, [toast.show]);
  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (!allowedFileTypes.includes(selectedFile.type)) {
        setToast({
          show: true,
          message: "Invalid file type. Please upload a PDF, Word, or DOC file.",
          type: "error"
        });
        setResume(null);
        return;
      }
      const maxSizeInBytes = 5 * 1024 * 1024;
      if (selectedFile.size > maxSizeInBytes) {
        setToast({
          show: true,
          message: "File size exceeds the limit (5 MB). Please upload a smaller file.",
          type: "error"
        });
        setResume(null);
        return;
      }
      setResume(selectedFile);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("job", job);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    fetch("/api/submit", {
      method: "POST",
      body: formData
    }).then((response) => response.text()).then((result) => {
      console.log(result);
      setToast({
        show: true,
        message: "Resume uploaded successfully!",
        type: "success"
      });
      setJob("");
      setName("");
      setEmail("");
      setResume(null);
      setTimeout(() => {
        setShowForm(false);
      }, 1500);
    }).catch((error) => {
      console.error("Error uploading resume:", error);
      setToast({
        show: true,
        message: "Error uploading resume. Please try again.",
        type: "error"
      });
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-vh-100", children: [
    toast.show && /* @__PURE__ */ jsx(
      "div",
      {
        className: `position-fixed ${toast.type === "success" ? "alert-success" : "alert-danger"} alert`,
        style: {
          top: "20px",
          right: "20px",
          zIndex: 9999,
          minWidth: "300px"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("span", { children: toast.message }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn-close",
              onClick: () => setToast({ show: false, message: "" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "card h-100 shadow-lg border-0 rounded-4 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "card-header text-white p-4", style: { background: "#007bff" }, children: /* @__PURE__ */ jsx("h4", { className: "card-title mb-0 fw-bold text-center", children: "Get Your Dream Job" }) }),
        /* @__PURE__ */ jsxs("div", { className: "card-body p-4 d-flex flex-column justify-content-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "fw-bold mb-3", style: { color: "#007bff" }, children: "YOUR CAREERS" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted mb-4", children: [
              "Take a journey of growth and excellence by joining ",
              /* @__PURE__ */ jsx("strong", { children: "Excerpt Technologies." }),
              "Being a top tech firm, we are constantly searching for driven and skilled people. Using creativity to communicate our vision."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-auto", children: /* @__PURE__ */ jsxs(
            "button",
            {
              className: "btn w-100 rounded-pill py-2 fw-semibold text-white",
              style: { backgroundColor: "#007bff", border: "none" },
              onClick: () => setShowForm(true),
              children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-paper-plane me-2" }),
                "Apply Now"
              ]
            }
          ) })
        ] })
      ] }) }),
      jobData.map((job2, index) => /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "card h-100 shadow-lg border-0 rounded-4 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "card-header text-white p-4", style: { background: "#007bff" }, children: /* @__PURE__ */ jsx("h4", { className: "card-title mb-0 fw-bold", children: job2.title }) }),
        /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mb-2", children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-briefcase me-2", style: { color: "#007bff" } }),
              /* @__PURE__ */ jsx("span", { className: "fw-semibold", children: "Experience:" }),
              /* @__PURE__ */ jsx("span", { className: "ms-2 text-muted", children: job2.experience })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mb-3", children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-graduation-cap text-success me-2" }),
              /* @__PURE__ */ jsx("span", { className: "fw-semibold", children: "Qualification:" }),
              /* @__PURE__ */ jsx("span", { className: "ms-2 text-muted", children: job2.qualification })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("h6", { className: "fw-semibold mb-2", children: "Required Skills:" }),
            /* @__PURE__ */ jsx("div", { className: "d-flex flex-wrap gap-1", children: job2.skills.map((skill, skillIndex) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "badge bg-light rounded-pill px-3 py-2",
                style: { color: "#007bff", border: "1px solid #007bff" },
                children: skill
              },
              skillIndex
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("h6", { className: "fw-semibold mb-2", children: "Description:" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted small mb-0", children: job2.description })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "card-footer bg-transparent border-0 p-4 pt-0", children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "btn w-100 rounded-pill py-2 fw-semibold",
            style: { color: "#007bff", border: "1px solid #007bff", backgroundColor: "transparent" },
            onClick: () => setShowForm(true),
            onMouseOver: (e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "white";
            },
            onMouseOut: (e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
            },
            children: [
              /* @__PURE__ */ jsx("i", { className: "fas fa-paper-plane me-2" }),
              "Apply for this position"
            ]
          }
        ) })
      ] }) }, index))
    ] }) }),
    showForm && /* @__PURE__ */ jsx("div", { className: "modal fade show d-block", style: { backgroundColor: "rgba(0,0,0,0.5)" }, children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-lg modal-dialog-centered", children: /* @__PURE__ */ jsxs("div", { className: "modal-content rounded-4 border-0 shadow-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "modal-header border-0 pb-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "modal-title text-primary fw-bold", children: "Submit Your Application" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "btn-close",
            onClick: () => setShowForm(false)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "modal-body p-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-md-6 mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label fw-semibold", children: "Job Title" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control form-control-lg rounded-pill",
                placeholder: "Enter job title",
                value: job,
                onChange: (e) => setJob(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-md-6 mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label fw-semibold", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control form-control-lg rounded-pill",
                placeholder: "Enter your full name",
                value: name,
                onChange: (e) => setName(e.target.value),
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "form-label fw-semibold", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              className: "form-control form-control-lg rounded-pill",
              placeholder: "Enter your email address",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: "form-label fw-semibold", children: "Upload Resume" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              className: "form-control form-control-lg",
              accept: ".pdf,.doc,.docx",
              onChange: (e) => handleFileChange(e.target.files[0]),
              required: true
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "form-text", children: "Accepted formats: PDF, DOC, DOCX (Max size: 5MB)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex gap-3 justify-content-end", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn btn-outline-secondary px-4 rounded-pill",
              onClick: () => setShowForm(false),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "btn btn-primary px-5 rounded-pill",
              children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-paper-plane me-2" }),
                "Submit Application"
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const Carrers = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Careers - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Join Excerpt Technologies Private Limited and explore exciting career opportunities in the software industry. We are looking for talented individuals to be part of our dynamic team."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(CarrerBg, {}),
    /* @__PURE__ */ jsx(JobData, {})
  ] });
};
export {
  Carrers as default
};
