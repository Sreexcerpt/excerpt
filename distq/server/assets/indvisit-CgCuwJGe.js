import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, createElement, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb } from "pdf-lib";
import { D as Dashboard } from "../entry-server.js";
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
import "qrcode";
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$3);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
];
const FileDown = createLucideIcon("file-down", __iconNode$2);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const API_URL = "/api";
async function generateCertificateBytes(student) {
  try {
    const existingPdfBytes = await fetch("/IVCERTIFICATE.pdf").then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const nameFontBytes = await fetch("/fonts/Sanchez-Regular.ttf").then(
      (res) => (
        // const nameFontBytes = await fetch("/fonts/AnastasiaScript.ttf").then((res) =>
        res.arrayBuffer()
      )
    );
    const mainContentFontBytes = await fetch("/fonts/TeXGyreTermes_2.ttf").then(
      (res) => res.arrayBuffer()
    );
    const regularFontBytes = await fetch("/fonts/TeXGyreTermes.ttf").then(
      (res) => res.arrayBuffer()
    );
    const nameFont = await pdfDoc.embedFont(nameFontBytes);
    const mainContentFont = await pdfDoc.embedFont(mainContentFontBytes);
    const regularFont = await pdfDoc.embedFont(regularFontBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    const primaryColor = rgb(4 / 255, 39 / 255, 99 / 255);
    const secondaryColor = rgb(102 / 255, 16 / 255, 242 / 255);
    const darkGray = rgb(51 / 255, 51 / 255, 51 / 255);
    const mediumGray = rgb(102 / 255, 102 / 255, 102 / 255);
    firstPage.drawText(student.name, {
      x: width / 2 - nameFont.widthOfTextAtSize(student.name, 48) / 2,
      y: height - 280,
      size: 48,
      color: rgb(0 / 255, 0 / 255, 0 / 255),
      // maxWidth: 500,
      textAlign: "center",
      font: nameFont
    });
    const visitDate = new Date(student.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    const pronoun = student.gender?.toLowerCase() === "male" ? "He" : student.gender?.toLowerCase() === "female" ? "She" : "He/She";
    const pronounLower = student.gender?.toLowerCase() === "male" ? "his" : student.gender?.toLowerCase() === "female" ? "her" : "his/her";
    const line1Part1 = `${pronoun} has undergone Industrial Visit at `;
    const line1Part2 = `Excerpt Technologies Pvt Ltd. `;
    const line1Part3 = `${pronoun} gained the `;
    const totalLine1 = line1Part1 + line1Part2;
    const textWidth1Part1 = mainContentFont.widthOfTextAtSize(line1Part1, 12);
    const textWidth1Part2 = regularFont.widthOfTextAtSize(line1Part2, 12);
    const totalTextWidth1 = textWidth1Part1 + textWidth1Part2;
    const line1X = (width - totalTextWidth1) / 2;
    firstPage.drawText(line1Part1, {
      x: line1X - 110,
      y: height - 330,
      size: 15,
      color: darkGray,
      font: regularFont
    });
    firstPage.drawText(line1Part2, {
      x: line1X + textWidth1Part1 - 70,
      y: height - 330,
      size: 16,
      color: rgb(0 / 255, 0 / 255, 0 / 255),
      font: mainContentFont
    });
    firstPage.drawText(line1Part3, {
      x: line1X + totalTextWidth1 - 10,
      y: height - 330,
      size: 15,
      color: darkGray,
      font: regularFont
    });
    const line2 = `knowledge on Trending Software Technologies in partial fulfillment of the award of the Engineering.`;
    const line4 = `Presented this on ${visitDate}.`;
    const line6 = `${pronounLower.charAt(0).toUpperCase() + pronounLower.slice(1)} conduct and performance was good during the Industrial Visit.`;
    const lineHeight = 20;
    let currentY = height - 330;
    currentY -= lineHeight;
    firstPage.drawText(line2, {
      x: width / 2 - 300,
      y: currentY,
      size: 15,
      color: darkGray,
      font: regularFont,
      textAlign: "center"
    });
    currentY -= lineHeight;
    firstPage.drawText(line4, {
      x: width / 2 - 150,
      y: currentY,
      size: 16,
      color: darkGray,
      font: mainContentFont,
      textAlign: "center"
    });
    currentY -= lineHeight;
    firstPage.drawText(line6, {
      x: width / 2 - 220,
      y: currentY,
      size: 16,
      color: darkGray,
      font: regularFont,
      textAlign: "center"
    });
    const logoBytes = await fetch("/image/1.png").then((res) => res.arrayBuffer());
    const logoImage = await pdfDoc.embedPng(logoBytes);
    firstPage.drawImage(logoImage, {
      x: width - 750,
      // Adjust for right alignment
      y: height - 550,
      // Adjust vertical position as per your template
      width: 150,
      height: 70
    });
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error("Error generating certificate:", error);
    throw error;
  }
}
async function generateCertificateFrontend(student) {
  try {
    const pdfBytes = await generateCertificateBytes(student);
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const fileName = `certificate_${student.name.replace(/\s+/g, "_")}.pdf`;
    window.open(url, "_blank");
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (error) {
    console.error("Error generating certificate:", error);
  }
}
async function generateBulkCertificatesZip(students, filters = {}) {
  try {
    const { default: JSZip } = await import("jszip");
    let filteredStudents = [...students];
    if (filters.collegeName && filters.collegeName.trim()) {
      filteredStudents = filteredStudents.filter(
        (s) => s.collegeName?.toLowerCase().includes(filters.collegeName.toLowerCase())
      );
    }
    if (filters.date && filters.date.trim()) {
      filteredStudents = filteredStudents.filter(
        (s) => s.date === filters.date
      );
    }
    if (filteredStudents.length === 0) {
      alert("No students match the selected filters");
      return;
    }
    const zip = new JSZip();
    for (const student of filteredStudents) {
      const pdfBytes = await generateCertificateBytes(student);
      zip.file(`certificate_${student.name.replace(/\s+/g, "_")}.pdf`, pdfBytes);
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `certificates_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log(`Bulk certificates ZIP downloaded successfully (${filteredStudents.length} students)`);
  } catch (error) {
    console.error("Error generating bulk certificates ZIP:", error);
    alert(`Error: ${error.message}`);
  }
}
function Indvisit() {
  const [students, setStudents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ collegeName: "", date: "" });
  const [uniqueColleges, setUniqueColleges] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);
  useEffect(() => {
    const colleges = [...new Set(students.map((s) => s.collegeName).filter(Boolean))];
    const dates = [...new Set(students.map((s) => s.date).filter(Boolean))].sort().reverse();
    setUniqueColleges(colleges);
    setUniqueDates(dates);
  }, [students]);
  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_URL}/indstudents`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };
  const downloadTemplate = () => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const template = [
      {
        "Date": today,
        "Name": "Rahul Sharma",
        "Father Name": "Suresh Sharma",
        "Mobile Number": "9876543210",
        "College Name": "ABC Institute of Technology",
        "Gender": "Male"
      },
      {
        "Date": today,
        "Name": "Priya Singh",
        "Father Name": "Rajesh Singh",
        "Mobile Number": "9876501234",
        "College Name": "XYZ College of Engineering",
        "Gender": "Female"
      },
      {
        "Date": today,
        "Name": "Amit Kumar",
        "Father Name": "Mahesh Kumar",
        "Mobile Number": "9998877665",
        "College Name": "LMN Polytechnic College",
        "Gender": "Male"
      }
    ];
    const ws = XLSX.utils.json_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "student_template.xlsx");
  };
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv"
      ];
      if (validTypes.includes(file.type) || file.name.endsWith(".csv") || file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
        setSelectedFile(file);
        setMessage({ text: "", type: "" });
      } else {
        setMessage({ text: "Please select a valid CSV or Excel file", type: "error" });
        setSelectedFile(null);
      }
    }
  };
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage({ text: "Please select a file first", type: "error" });
      return;
    }
    setUploading(true);
    setMessage({ text: "", type: "" });
    try {
      const fileData = await selectedFile.arrayBuffer();
      const workbook = XLSX.read(fileData);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      const formattedData = jsonData.map((row) => ({
        date: row.Date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        name: row.Name || row.name,
        fatherName: row["Father Name"] || row.fatherName || row["father name"],
        mobileNumber: String(row["Mobile Number"] || row.mobileNumber || row["mobile number"]),
        collegeName: row["College Name"] || row.collegeName || row["college name"],
        gender: row.Gender || row.gender
      }));
      const res = await fetch(`${API_URL}/indstudents/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ students: formattedData })
      });
      const result = await res.json();
      if (res.ok) {
        setMessage({ text: `Successfully uploaded ${result.count} students`, type: "success" });
        setSelectedFile(null);
        fetchStudents();
      } else {
        setMessage({ text: result.error || "Upload failed", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Error processing file: " + err.message, type: "error" });
    } finally {
      setUploading(false);
    }
  };
  const resetFilters = () => {
    setFilters({ collegeName: "", date: "" });
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsx("h1", { children: "Industrial Visit Certificate" }) }),
      /* @__PURE__ */ jsx("div", { className: "upload-section", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("h2", { children: "Upload Student Data" }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("button", { onClick: downloadTemplate, className: "btn btn-secondary col-2", children: [
            /* @__PURE__ */ jsx(FileDown, { size: 20 }),
            "Download Template"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "file-input-wrapper col-6 ", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: ".csv,.xlsx,.xls",
              onChange: handleFileSelect,
              id: "file-input",
              className: "file-input"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleUpload,
              disabled: !selectedFile || uploading,
              className: "btn btn-primary col-2",
              children: uploading ? "Uploading..." : "Upload Students"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "students-section", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "section-header", children: students.length > 0 && /* @__PURE__ */ jsxs("div", { className: "header-actions", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowFilters(!showFilters),
              className: "btn btn-secondary",
              children: [
                /* @__PURE__ */ jsx(Funnel, { size: 20 }),
                showFilters ? "Hide Filters" : "Show Filters"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => generateBulkCertificatesZip(students, filters),
              className: "btn btn-primary",
              children: [
                /* @__PURE__ */ jsx(Download, { size: 20 }),
                "Download Certificates"
              ]
            }
          )
        ] }) }),
        showFilters && /* @__PURE__ */ jsxs("div", { className: "filters-section", children: [
          /* @__PURE__ */ jsxs("div", { className: "filter-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "college-filter", children: "College Name" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "college-filter",
                value: filters.collegeName,
                onChange: (e) => setFilters({ ...filters, collegeName: e.target.value }),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "All Colleges" }),
                  uniqueColleges.map((college) => /* @__PURE__ */ jsx("option", { value: college, children: college }, college))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "filter-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "date-filter", children: "Visit Date" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "date-filter",
                value: filters.date,
                onChange: (e) => setFilters({ ...filters, date: e.target.value }),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "All Dates" }),
                  uniqueDates.map((date) => /* @__PURE__ */ jsx("option", { value: date, children: new Date(date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                  }) }, date))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: resetFilters, className: "btn btn-secondary", children: [
            /* @__PURE__ */ jsx(X, { size: 20 }),
            "Reset Filters"
          ] })
        ] }),
        students.length > 0 && /* @__PURE__ */ jsx("div", { className: "table-wrapper table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-sm table-bordered", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Date" }),
            /* @__PURE__ */ jsx("th", { children: "Name" }),
            /* @__PURE__ */ jsx("th", { children: "Father Name" }),
            /* @__PURE__ */ jsx("th", { children: "Mobile" }),
            /* @__PURE__ */ jsx("th", { children: "College" }),
            /* @__PURE__ */ jsx("th", { children: "Gender" }),
            /* @__PURE__ */ jsx("th", { children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: students.filter((student) => {
            let match = true;
            if (filters.collegeName) {
              match = match && student.collegeName?.toLowerCase().includes(filters.collegeName.toLowerCase());
            }
            if (filters.date) {
              match = match && student.date === filters.date;
            }
            return match;
          }).map((student) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: student.date }),
            /* @__PURE__ */ jsx("td", { children: student.name }),
            /* @__PURE__ */ jsx("td", { children: student.fatherName }),
            /* @__PURE__ */ jsx("td", { children: student.mobileNumber }),
            /* @__PURE__ */ jsx("td", { children: student.collegeName }),
            /* @__PURE__ */ jsx("td", { children: student.gender }),
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => generateCertificateFrontend(student),
                className: "btn-small",
                children: [
                  /* @__PURE__ */ jsx(Download, { size: 16 }),
                  "Download"
                ]
              }
            ) })
          ] }, student.id)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("style", { children: `
                .header-actions {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .filters-section {
                    display: flex;
                    gap: 15px;
                    align-items: flex-end;
                    margin-bottom: 20px;
                    padding: 15px;
                    background-color: #f5f5f5;
                    border-radius: 8px;
                    flex-wrap: wrap;
                }

                .filter-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    flex: 1;
                    min-width: 200px;
                }

                .filter-group label {
                    font-weight: 600;
                    color: #333;
                    font-size: 14px;
                }

                .filter-group select {
                    padding: 8px 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                    background-color: white;
                    cursor: pointer;
                }

                .filter-group select:focus {
                    outline: none;
                    border-color: #042763;
                    box-shadow: 0 0 0 3px rgba(4, 39, 99, 0.1);
                }
            ` })
    ] }) })
  ] }) });
}
export {
  Indvisit as default
};
