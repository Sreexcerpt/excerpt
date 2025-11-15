import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import QRCode from "qrcode";
import PropTypes from "prop-types";
import axios from "axios";
import "react-toastify";
import "../entry-server.js";
import "react-dom/server";
import "react-router";
import "react-router-dom";
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
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
function CertificateGenerator({
  firstName,
  CollegeName,
  FATHER_NAME,
  REG_NO,
  coursename,
  certificate_type,
  yop,
  coursecertificatr,
  Gender,
  Role,
  To,
  From,
  department,
  qualification
}) {
  console.log("Received props:", {
    firstName,
    CollegeName,
    FATHER_NAME,
    REG_NO,
    coursename,
    certificate_type,
    yop,
    Gender,
    Role,
    department,
    To,
    From,
    qualification
  });
  const defaultImage = "/image/default.png";
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [year, month, day] = dateString.split("-");
    return `${parseInt(day)}-${months[parseInt(month) - 1]}-${year}`;
  };
  const formattedFromDate = formatDate(From);
  const formattedToDate = formatDate(To);
  const getImageSource = (regNo) => {
    return `/image/${regNo}.jpg`;
  };
  const [qrCodeValue, setQrCodeValue] = useState("");
  const capitalize = (str, lower = false) => {
    return (lower ? str.toLowerCase() : str).replace(
      /(?:^|\s|["'([{])+\S/g,
      (match) => match.toUpperCase()
    );
  };
  const handleGenerateCertificate = async () => {
    const trimmedName = firstName ? firstName.trim() : "";
    if (trimmedName !== "" && certificate_type !== "" && qualification !== "") {
      try {
        let templatePath = "";
        if (qualification.toUpperCase() === "BE") {
          if (certificate_type.toLowerCase() === "internship") {
            templatePath = "/BEINTERNSHIP.pdf";
          } else if (certificate_type.toLowerCase() === "project") {
            templatePath = "/BEPROJECT.pdf";
          }
        } else if (qualification.toUpperCase() === "DIPLOMA") {
          if (certificate_type.toLowerCase() === "internship") {
            templatePath = "/DIPLOMAINTERNSHIP.pdf";
          } else if (certificate_type.toLowerCase() === "project") {
            templatePath = "/DIPLOMAPROJECT.pdf";
          }
        }
        const existingPdfBytes = await fetch(templatePath).then(
          (res) => res.arrayBuffer()
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);
        const nameFontBytes = await fetch("/fonts/Sanchez-Regular.ttf").then(
          (res) => res.arrayBuffer()
        );
        const mainContentFontBytes = await fetch("/fonts/NunitoSans_10pt-Bold.ttf").then(
          (res) => res.arrayBuffer()
        );
        const regularFontBytes = await fetch("/fonts/NunitoSans_7pt_SemiExpanded-SemiBold.ttf").then(
          (res) => res.arrayBuffer()
        );
        const nameFont = await pdfDoc.embedFont(nameFontBytes);
        const mainContentFont = await pdfDoc.embedFont(mainContentFontBytes);
        const regularFont = await pdfDoc.embedFont(regularFontBytes);
        const firstPage = pdfDoc.getPages()[0];
        const { width: pageWidth, height: pageHeight } = firstPage.getSize();
        const LOGO_PATH = "/image/1.png";
        const logoConfigs = {
          BEINTERNSHIP: {
            width: 150,
            height: 80,
            x: "center",
            // Center horizontally
            y: "top",
            // Position from top
            topMargin: 10,
            rightMargin: 0
          },
          BEPROJECT: {
            width: 180,
            height: 70,
            x: "right",
            // Right side
            y: "top",
            // Position from top
            topMargin: 20,
            rightMargin: 30
          },
          DIPLOMAINTERNSHIP: {
            width: 150,
            height: 60,
            x: "center",
            // Left side
            y: "top",
            // Position from top
            topMargin: 20,
            rightMargin: 0,
            leftMargin: 0
          },
          DIPLOMAPROJECT: {
            width: 160,
            height: 70,
            x: "center",
            // Center horizontally
            y: "top",
            // Position from top
            topMargin: 50,
            rightMargin: 0
          },
          IVCERTIFICATE: {
            width: 170,
            height: 75,
            x: "right",
            // Right side corner
            y: "top",
            // Position from top
            topMargin: 20,
            rightMargin: 40
          },
          IVCERTIFICATE1: {
            width: 180,
            height: 70,
            x: "left",
            // Left side corner
            y: "top",
            // Position from top
            topMargin: 25,
            rightMargin: 0,
            leftMargin: 40
          },
          IVCERTIFICATE3: {
            width: 210,
            height: 95,
            x: "center",
            // Center
            y: "top",
            // Position from top
            topMargin: 10,
            rightMargin: 0
          },
          cert30: {
            width: 180,
            height: 80,
            x: "right",
            // Right side
            y: "top",
            // Position from top
            topMargin: 35,
            rightMargin: 45
          }
        };
        const templateKey = qualification.toUpperCase() + (certificate_type ? certificate_type.toUpperCase() : "");
        const logoConfig = logoConfigs[templateKey] || {
          width: 200,
          height: 90,
          x: "center",
          y: "top",
          topMargin: 20,
          rightMargin: 0
        };
        let logoX;
        let logoY = pageHeight - logoConfig.height - logoConfig.topMargin;
        switch (logoConfig.x) {
          case "center":
            logoX = (pageWidth - logoConfig.width) / 2;
            break;
          case "right":
            logoX = pageWidth - logoConfig.width - logoConfig.rightMargin;
            break;
          case "left":
            logoX = logoConfig.leftMargin || 50;
            break;
          default:
            logoX = (pageWidth - logoConfig.width) / 2;
        }
        try {
          const logoBytes = await fetch(LOGO_PATH).then((res) => res.arrayBuffer());
          let logoImage;
          const logoExt = LOGO_PATH.toLowerCase();
          if (logoExt.endsWith(".png")) {
            logoImage = await pdfDoc.embedPng(logoBytes);
          } else if (logoExt.endsWith(".jpg") || logoExt.endsWith(".jpeg")) {
            logoImage = await pdfDoc.embedJpg(logoBytes);
          } else if (logoExt.endsWith(".webp")) {
            const blob = new Blob([logoBytes], { type: "image/webp" });
            const bitmap = await createImageBitmap(blob);
            const canvas = document.createElement("canvas");
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(bitmap, 0, 0);
            const pngDataUrl = canvas.toDataURL("image/png");
            const pngBytes = Uint8Array.from(atob(pngDataUrl.split("base64,")[1]), (c) => c.charCodeAt(0));
            logoImage = await pdfDoc.embedPng(pngBytes);
          } else {
            logoImage = await pdfDoc.embedPng(logoBytes);
          }
          firstPage.drawImage(logoImage, {
            x: logoX,
            y: logoY,
            width: logoConfig.width,
            height: logoConfig.height
          });
        } catch (logoError) {
          console.warn("Could not load logo, continuing without it:", logoError);
        }
        const templateConfig = {
          BE: {
            internship: {
              name: {
                x: "center",
                y: 340,
                fontSize: 34
              },
              content: {
                x: 110,
                y: 305,
                fontSize: 13.5,
                maxWidth: 650,
                rightMargin: 110,
                lineSpacing: 22
              },
              qrCode: {
                x: 295,
                y: 77,
                width: 80,
                height: 70
              }
            },
            project: {
              name: {
                x: "center",
                y: 370,
                fontSize: 30
              },
              content: {
                x: 130,
                y: 330,
                fontSize: 14,
                maxWidth: 650,
                rightMargin: 130,
                lineSpacing: 22
              },
              qrCode: {
                x: 290,
                y: 50,
                width: 100,
                height: 90
              }
            }
          },
          DIPLOMA: {
            internship: {
              name: {
                x: "center",
                y: 360,
                fontSize: 32
              },
              content: {
                x: 160,
                y: 325,
                fontSize: 13,
                maxWidth: 620,
                rightMargin: 160,
                lineSpacing: 22
              },
              qrCode: {
                x: 390,
                y: 110,
                width: 80,
                height: 80
              }
            },
            project: {
              name: {
                x: "center",
                y: 330,
                fontSize: 30
              },
              content: {
                x: 140,
                y: 290,
                fontSize: 13,
                maxWidth: 620,
                rightMargin: 140,
                lineSpacing: 22
              },
              qrCode: {
                x: 370,
                y: 90,
                width: 75,
                height: 70
              }
            }
          }
        };
        const config = templateConfig[qualification.toUpperCase()][certificate_type.toLowerCase()];
        const displayName = capitalize(trimmedName);
        const nameWidth = nameFont.widthOfTextAtSize(displayName, config.name.fontSize);
        const nameX = config.name.x === "center" ? (pageWidth - nameWidth) / 2 : config.name.x;
        firstPage.drawText(displayName, {
          x: nameX,
          y: config.name.y,
          size: config.name.fontSize,
          font: nameFont,
          color: rgb(0, 0, 0)
        });
        let additionalContent = "";
        if (certificate_type.toLowerCase() === "internship") {
          additionalContent = Gender === "MALE" ? `This is to certify that student from "${CollegeName}" has completed their internship work from ${formattedFromDate} to ${formattedToDate} at Excerpt Technologies Private Limited.

He has successfully & satisfactorily completed assigned project work. During his tenure as a "${Role}" we found him sincere, hardworking, and result-oriented.

We wish him great success in all of his future endeavors.` : `This is to certify that student from "${CollegeName}" has completed their internship work from ${formattedFromDate} to ${formattedToDate} at Excerpt Technologies Private Limited.

She has successfully & satisfactorily completed assigned project work. During her tenure as a "${Role}" we found her sincere, hardworking, and result-oriented.

We wish her great success in all of her future endeavors.`;
        } else if (certificate_type.toLowerCase() === "project") {
          additionalContent = Gender === "MALE" ? `This is to certify that student from ${CollegeName} has completed their project work from ${formattedFromDate} to ${formattedToDate} at Excerpt Technologies Private Limited.

He has successfully & satisfactorily completed assigned project work. During his tenure as a ${Role} we found him sincere, hardworking, and result-oriented.

We wish him great success in all of his future endeavors.` : `This is to certify that student from ${CollegeName} has completed their project work from ${formattedFromDate} to ${formattedToDate} at Excerpt Technologies Private Limited.

She has successfully & satisfactorily completed assigned project work. During her tenure as a ${Role} we found her sincere, hardworking, and result-oriented.

We wish her great success in all of her future endeavors.`;
        }
        const drawProperlySpacedText = (text, x, y, fontSize, font) => {
          firstPage.drawText(text, {
            x,
            y,
            size: fontSize,
            font,
            color: rgb(0, 0, 0)
          });
        };
        const wrapAndDrawText = (text, x, y, maxWidth, fontSize, font, lineSpacing) => {
          const words = text.split(" ");
          let line = "";
          let currentY = y;
          for (let i = 0; i < words.length; i++) {
            const wordToAdd = line === "" ? words[i] : " " + words[i];
            const testLine = line + wordToAdd;
            const testWidth = font.widthOfTextAtSize(testLine, fontSize);
            if (testWidth > maxWidth && line !== "") {
              drawProperlySpacedText(line, x, currentY, fontSize, font);
              line = words[i];
              currentY -= lineSpacing;
            } else {
              line = testLine;
            }
          }
          if (line) {
            drawProperlySpacedText(line, x, currentY, fontSize, font);
          }
          return currentY;
        };
        if (additionalContent !== "") {
          const contentParagraphs = additionalContent.split("\n");
          let currentY = config.content.y - 20;
          const lineSpacing = config.content.lineSpacing || 20;
          const paragraphSpacing = 10;
          for (const paragraph of contentParagraphs) {
            if (paragraph.trim() === "") {
              currentY -= paragraphSpacing;
              continue;
            }
            currentY = wrapAndDrawText(
              paragraph,
              config.content.x,
              currentY,
              config.content.maxWidth,
              config.content.fontSize,
              regularFont,
              lineSpacing
            );
            currentY -= paragraphSpacing;
          }
        }
        const linkURL = `https://www.excerptech.com/certificate.html?REG_NO=${REG_NO}`;
        setQrCodeValue(linkURL);
        const qrCodeOptions = {
          color: { dark: "#000" },
          errorCorrectionLevel: "H",
          width: 200,
          type: "png",
          transparent: true
        };
        const qrCodeURL = await QRCode.toDataURL(linkURL, qrCodeOptions);
        const qrCodeImageBytes = Uint8Array.from(atob(qrCodeURL.split("base64,")[1]), (c) => c.charCodeAt(0));
        const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);
        firstPage.drawImage(qrCodeImage, {
          x: config.qrCode.x,
          y: config.qrCode.y,
          width: config.qrCode.width,
          height: config.qrCode.height
        });
        const pdfBytes = await pdfDoc.save();
        const file = new File(
          [pdfBytes],
          "Certificate.pdf",
          {
            type: "application/pdf;charset=utf-8"
          }
        );
        if (typeof window !== "undefined") {
          const fileSaver = await import("file-saver");
          fileSaver.default(file);
        }
      } catch (error) {
        console.error("Error generating or downloading certificate:", error);
        alert("Error generating or downloading certificate. Please try again later.");
      }
    } else {
      alert("Please enter a name, select a qualification, and select a certificate type.");
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "card shadow", children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "justify" }, children: [
      /* @__PURE__ */ jsx("img", { className: "image", src: getImageSource(REG_NO) || defaultImage, alt: "Student" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "NAME:" }),
        " ",
        firstName
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "REG_NO:" }),
        " ",
        REG_NO
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "FATHER_NAME:" }),
        " ",
        FATHER_NAME
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "COURSETITLE:" }),
        " ",
        coursename
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "COOLEGENAME:" }),
        " ",
        CollegeName
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "CERTIFICATION:" }),
        " ",
        certificate_type
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "YOP:" }),
        " ",
        yop
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "COURSECERTIFICATION:" }),
        " ",
        coursecertificatr
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "GENDER:" }),
        " ",
        Gender
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { className: "detail-label", children: "Role:" }),
        " ",
        Role
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("button", { onClick: handleGenerateCertificate, style: { marginLeft: "-9px", width: "200px", marginTop: "10px" }, children: "Get Certificate" }),
      /* @__PURE__ */ jsx("a", { style: { marginLeft: "180px" }, href: `https://www.excerptech.com/certificate.html?REG_NO=${REG_NO}`, target: "_blank", rel: "noopener noreferrer", children: "View Certificate" })
    ] })
  ] }) });
}
CertificateGenerator.propTypes = {
  firstName: PropTypes.string.isRequired,
  REG_NO: PropTypes.string.isRequired,
  FATHER_NAME: PropTypes.string.isRequired,
  coursename: PropTypes.string.isRequired,
  CollegeName: PropTypes.string.isRequired,
  Course_Title: PropTypes.string.isRequired,
  certificate_type: PropTypes.string.isRequired,
  yop: PropTypes.string.isRequired
};
function Certificate$1() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedCollegeName, setSelectedCollegeName] = useState("");
  const [selectedYOP, setSelectedYOP] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [selectedCertificationType, setSelectedCertificationType] = useState("");
  const [collegeNames, setCollegeNames] = useState([]);
  const [yopList, setYOPList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegNo, setSelectedRegNo] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/students");
      setStudents(response.data);
      console.log("Fetched students:", response.data);
      const uniqueCollegeNames = [...new Set(response.data.map((student) => student.college_name))];
      const uniqueYOPs = [...new Set(response.data.map((student) => student.yop))];
      setCollegeNames(uniqueCollegeNames);
      setYOPList(uniqueYOPs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    filterStudents(
      selectedCollegeName,
      selectedYOP,
      searchText,
      selectedRegNo,
      selectedQualification,
      selectedCertificationType
    );
  }, [
    students,
    selectedCollegeName,
    selectedYOP,
    searchText,
    selectedRegNo,
    selectedQualification,
    selectedCertificationType
  ]);
  console.log("Filtered students:", filteredStudents);
  const handleCollegeChange = (e) => setSelectedCollegeName(e.target.value);
  const handleYOPChange = (e) => setSelectedYOP(e.target.value);
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleRegNoChange = (e) => setSelectedRegNo(e.target.value);
  const handleQualificationChange = (e) => setSelectedQualification(e.target.value);
  const handleCertificationTypeChange = (e) => setSelectedCertificationType(e.target.value);
  const filterStudents = (collegeName, yop, searchText2, regNo, qualification, certificationType) => {
    let filtered = [...students];
    if (collegeName) {
      filtered = filtered.filter(
        (student) => student.college_name?.toLowerCase() === collegeName.toLowerCase()
      );
    }
    if (yop) {
      filtered = filtered.filter((student) => student.yop === yop);
    }
    if (qualification) {
      filtered = filtered.filter((student) => {
        const studentQual = student.qualification?.toLowerCase() || "";
        return studentQual === qualification.toLowerCase();
      });
    }
    if (certificationType) {
      filtered = filtered.filter((student) => {
        const certType = (student.CERTIFICATION || student.certificate_type || "").toLowerCase();
        return certType === certificationType.toLowerCase();
      });
    }
    if (searchText2) {
      const searchLowerCase = searchText2.toLowerCase();
      filtered = filtered.filter(
        (student) => student.NAME?.toLowerCase().includes(searchLowerCase) || student.REG_NO?.toLowerCase().includes(searchLowerCase) || student.FATHER_NAME?.toLowerCase().includes(searchLowerCase) || (student.COURSETITLE || student.coursename || "")?.toLowerCase().includes(searchLowerCase)
      );
    }
    if (regNo) {
      filtered = filtered.filter((student) => student.REG_NO === regNo);
    }
    filtered.sort((a, b) => (a.NAME || "").localeCompare(b.NAME || ""));
    setFilteredStudents(filtered);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "sub-header position-relative", style: { height: "10vh" }, children: /* @__PURE__ */ jsxs("div", { className: "container d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "heading-2 w-20", children: "Certificate" }),
      /* @__PURE__ */ jsx("h6", { className: "heading-6 w-80 text-end", children: /* @__PURE__ */ jsx("a", { href: "/dashboard", children: "dashboard" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsxs(
        "select",
        {
          className: "form-select",
          value: selectedCollegeName,
          onChange: handleCollegeChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "College Name" }),
            collegeNames.map((collegeName, index) => /* @__PURE__ */ jsx("option", { value: collegeName, children: collegeName }, index))
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsxs(
        "select",
        {
          className: "form-select",
          value: selectedYOP,
          onChange: handleYOPChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "YOP" }),
            yopList.map((yop, index) => /* @__PURE__ */ jsx("option", { value: yop, children: yop }, index))
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsxs(
        "select",
        {
          className: "form-select",
          value: selectedQualification,
          onChange: handleQualificationChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Qualification" }),
            /* @__PURE__ */ jsx("option", { value: "BE", children: "BE" }),
            /* @__PURE__ */ jsx("option", { value: "Diploma", children: "Diploma" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsxs(
        "select",
        {
          className: "form-select",
          value: selectedCertificationType,
          onChange: handleCertificationTypeChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Certificate Type" }),
            /* @__PURE__ */ jsx("option", { value: "INTERNSHIP", children: "Internship" }),
            /* @__PURE__ */ jsx("option", { value: "PROJECT", children: "Project" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "form-control",
          placeholder: "Search...",
          value: searchText,
          onChange: handleSearchChange
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-md-2", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "form-control",
          placeholder: "Enter REG_NO...",
          value: selectedRegNo,
          onChange: handleRegNoChange
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: currentStudents.map((student, index) => /* @__PURE__ */ jsx("div", { className: "col-xl-4 col-md-4 col-sm-6 col-lg-4 mb-4", children: /* @__PURE__ */ jsx(
      CertificateGenerator,
      {
        firstName: student.NAME || "N/A",
        Gender: student.GENDER || "N/A",
        CollegeName: student.college_name || "N/A",
        FATHER_NAME: student.FATHER_NAME || "N/A",
        REG_NO: student.REG_NO || "N/A",
        coursename: student.COURSETITLE || student.coursename || "N/A",
        certificate_type: student.CERTIFICATION || student.certificate_type || "N/A",
        qualification: student.qualification || "Not Available",
        department: student.department || "Not Available",
        yop: student.yop || "N/A",
        coursecertificatr: student.COURSECERTIFICATION || student.Course_Certificate_Type || "N/A",
        Role: student.Role || "N/A",
        From: student.From || "N/A",
        To: student.To || "N/A"
      }
    ) }, index)) }),
    totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center align-items-center mt-4 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          style: { maxWidth: "100px" },
          className: "btn btn-secondary mx-2",
          disabled: currentPage === 1,
          onClick: () => handlePageChange(currentPage - 1),
          children: "◀ Prev"
        }
      ),
      getPageNumbers().map(
        (page, index) => page === "..." ? /* @__PURE__ */ jsx("span", { className: "mx-2 text-muted", children: "..." }, index) : /* @__PURE__ */ jsx(
          "button",
          {
            style: { maxWidth: "3vw" },
            className: `btn btn-sm mx-1 ${currentPage === page ? "btn-primary" : "btn-outline-primary"}`,
            onClick: () => handlePageChange(page),
            children: page
          },
          index
        )
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: { maxWidth: "100px" },
          className: "btn btn-secondary mx-2",
          disabled: currentPage === totalPages,
          onClick: () => handlePageChange(currentPage + 1),
          children: "Next ▶"
        }
      )
    ] })
  ] });
}
const Certificate = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Certificate$1, {}) }) })
  ] }) });
};
export {
  Certificate as default
};
