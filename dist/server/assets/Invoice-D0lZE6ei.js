import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import { D as Dashboard } from "../entry-server.js";
import { v as verdanaFont, a as verdanaboldFont, n as notoSansBase64 } from "./verdanbold-B2YmcHcO.js";
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
import "react-toastify";
import "pdf-lib";
import "@pdf-lib/fontkit";
import "qrcode";
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
const InvoiceForm = () => {
  const dateInputStyle = {
    cursor: "pointer",
    caretColor: "transparent",
    userSelect: "none"
  };
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    date: "",
    terms: "",
    dueDate: "",
    billToName: "",
    billtocompanyname: "",
    billToAddress: "",
    billToemail: "",
    billTophone: "",
    billTogstin: "",
    shipToName: "",
    shipTocompanyname: "",
    shipToAddress: "",
    shipToemail: "",
    shipTophone: "",
    shipTogstin: "",
    subTotal: "",
    cgst: "",
    sgst: "",
    total: "",
    balanceDue: "",
    totalDiscount: "0.00",
    totalInWords: "",
    year: "24-25",
    thankYouMessage: "Thank you for the valuable business! We will always be at your desk to support you.",
    termsAndConditions: "Full payment is due upon receipt of this invoice. Late payments may incur additional charges or interest As per the applicable laws.",
    bankDetails: `Name: Excerpt Technologies Private Limited
Account Number: 10063739760
Name of Bank: IDFC First Bank 
IFSC Code: IDFB0080151
PAN No : AAGCE2327K`
  });
  const [cgstRate, setCgstRate] = useState("");
  const [sgstRate, setSgstRate] = useState("");
  const [lastInvoiceNumber, setLastInvoiceNumber] = useState(0);
  const [previewing, setPreviewing] = useState(null);
  const [discounts, setDiscounts] = useState([
    { label: "", amount: "" }
  ]);
  const [saving, setSaving] = useState(false);
  const [parts, setParts] = useState([
    { title: "Part A", items: [{ description: "", amount: "" }] }
  ]);
  const navigate = useNavigate();
  const convertNumberToWords = (amount) => {
    const words = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen"
    ];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const convert = (num) => {
      if (num < 20) return words[num];
      if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + words[num % 10] : "");
      if (num < 1e3) return words[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " and " + convert(num % 100) : "");
      if (num < 1e5) return convert(Math.floor(num / 1e3)) + " Thousand" + (num % 1e3 ? " " + convert(num % 1e3) : "");
      if (num < 1e7) return convert(Math.floor(num / 1e5)) + " Lakh" + (num % 1e5 ? " " + convert(num % 1e5) : "");
      return convert(Math.floor(num / 1e7)) + " Crore" + (num % 1e7 ? " " + convert(num % 1e7) : "");
    };
    const [whole, decimal] = Number(amount).toFixed(2).split(".");
    const inWords = convert(parseInt(whole)) + " Rupees";
    const paisa = parseInt(decimal) ? " and " + convert(parseInt(decimal)) + " Paise" : "";
    return inWords + paisa + " only";
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };
  const formatCurrency = (amount) => {
    return `₹ ${parseFloat(amount).toFixed(2)}`;
  };
  const [sameAsBillTo, setSameAsBillTo] = useState(false);
  const validateEmail = (email) => {
    if (!email) return true;
    const emailRegex = /^[^@.\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email);
  };
  const validatePhone = (phone) => {
    if (!phone) return true;
    const cleanPhone = phone.replace(/\s+/g, "");
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    return phoneRegex.test(cleanPhone);
  };
  const validateGST = (gst) => {
    if (!gst) return true;
    const gstRegex = /^[A-Z0-9]{15}$/;
    return gstRegex.test(gst.toUpperCase());
  };
  const handleSameAsBillTo = (e) => {
    const isChecked = e.target.checked;
    setSameAsBillTo(isChecked);
    if (isChecked) {
      setInvoiceData((prev) => ({
        ...prev,
        shipToName: prev.billToName,
        shipTocompanyname: prev.billtocompanyname,
        shipToAddress: prev.billToAddress,
        shipToemail: prev.billToemail,
        shipTophone: prev.billTophone,
        shipTogstin: prev.billTogstin
      }));
    }
  };
  const handleInvoiceDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "billTophone" || name === "shipTophone") {
      if (value && !value.startsWith("+91")) {
        if (value.match(/^[6-9]/)) {
          const newValue = "+91" + value;
          setInvoiceData((prev) => ({ ...prev, [name]: newValue }));
          if (sameAsBillTo && name.startsWith("billTo")) {
            const shipToField = name.replace("billTo", "shipTo");
            setInvoiceData((prev) => ({ ...prev, [shipToField]: newValue }));
          }
          return;
        }
        return;
      }
      if (value.length > 3) {
        const phoneDigits = value.slice(3);
        if (!/^\d*$/.test(phoneDigits) || phoneDigits.length > 10) {
          return;
        }
        if (phoneDigits.length === 1 && !/^[6-9]$/.test(phoneDigits)) {
          return;
        }
      }
    }
    if (name === "billTogstin" || name === "shipTogstin") {
      if (value.length > 15) return;
      const upperValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      setInvoiceData((prev) => ({ ...prev, [name]: upperValue }));
      if (sameAsBillTo && name.startsWith("billTo")) {
        const shipToField = name.replace("billTo", "shipTo");
        setInvoiceData((prev) => ({ ...prev, [shipToField]: upperValue }));
      }
      return;
    }
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
    if (sameAsBillTo && name.startsWith("billTo")) {
      const shipToField = name.replace("billTo", "shipTo");
      setInvoiceData((prev) => ({ ...prev, [shipToField]: value }));
    }
  };
  useEffect(() => {
    const totalItemsAmount = parts.reduce(
      (partSum, part) => partSum + part.items.reduce((itemSum, item) => itemSum + (parseFloat(item.amount) || 0), 0),
      0
    );
    const cgstPercent = parseFloat(cgstRate) || 0;
    const sgstPercent = parseFloat(sgstRate) || 0;
    const cgstCalculated = totalItemsAmount * (cgstPercent / 100);
    const sgstCalculated = totalItemsAmount * (sgstPercent / 100);
    const total = totalItemsAmount + cgstCalculated + sgstCalculated;
    setInvoiceData((prev) => ({
      ...prev,
      subTotal: totalItemsAmount.toFixed(2),
      cgst: cgstCalculated.toFixed(2),
      sgst: sgstCalculated.toFixed(2),
      total: total.toFixed(2),
      balanceDue: total.toFixed(2)
      // Set balance due equal to total by default
    }));
  }, [parts, cgstRate, sgstRate]);
  useEffect(() => {
    const fetchLastInvoiceNumber = async () => {
      try {
        const response = await axios.get("/last-invoice-number");
        setLastInvoiceNumber(response.data.lastNumber || 0);
      } catch (error) {
        console.error("Error fetching last invoice number:", error);
      }
    };
    fetchLastInvoiceNumber();
  }, []);
  useEffect(() => {
    const newInvoiceNumber = `ETPL/${invoiceData.year}/${String(lastInvoiceNumber + 1).padStart(3, "0")}`;
    setInvoiceData((prev) => ({ ...prev, invoiceNumber: newInvoiceNumber }));
  }, [lastInvoiceNumber, invoiceData.year]);
  useEffect(() => {
    const totalItemsAmount = parts.reduce(
      (partSum, part) => partSum + part.items.reduce((itemSum, item) => itemSum + (parseFloat(item.amount) || 0), 0),
      0
    );
    const cgstPercent = parseFloat(cgstRate) || 0;
    const sgstPercent = parseFloat(sgstRate) || 0;
    const cgstCalculated = totalItemsAmount * (cgstPercent / 100);
    const sgstCalculated = totalItemsAmount * (sgstPercent / 100);
    const totalDiscountAmount = discounts.reduce(
      (sum, discount) => sum + (parseFloat(discount.amount) || 0),
      0
    );
    const subtotalAfterDiscount = totalItemsAmount - totalDiscountAmount;
    const total = subtotalAfterDiscount + cgstCalculated + sgstCalculated;
    setInvoiceData((prev) => ({
      ...prev,
      subTotal: totalItemsAmount.toFixed(2),
      totalDiscount: totalDiscountAmount.toFixed(2),
      cgst: cgstCalculated.toFixed(2),
      sgst: sgstCalculated.toFixed(2),
      total: total.toFixed(2),
      balanceDue: total.toFixed(2)
    }));
  }, [parts, cgstRate, sgstRate, discounts]);
  const handleCgstRateChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
      setCgstRate(val);
    }
  };
  const handleSgstRateChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
      setSgstRate(val);
    }
  };
  const handlePartTitleChange = (index, value) => {
    const newParts = [...parts];
    newParts[index].title = value;
    setParts(newParts);
  };
  const handlePartItemChange = (partIndex, itemIndex, field, value) => {
    const newParts = [...parts];
    if (field === "amount") {
      if (value === "" || /^\d{1,9}(\.\d{0,2})?$/.test(value)) {
        newParts[partIndex].items[itemIndex][field] = value;
        setParts(newParts);
      }
      return;
    }
    newParts[partIndex].items[itemIndex][field] = value;
    setParts(newParts);
  };
  const handleAddPartItem = (partIndex) => {
    const newParts = [...parts];
    newParts[partIndex].items.push({ description: "", amount: "" });
    setParts(newParts);
  };
  const handleDeletePartItem = (partIndex, itemIndex) => {
    const newParts = [...parts];
    newParts[partIndex].items.splice(itemIndex, 1);
    setParts(newParts);
  };
  const handleAddNewPart = () => {
    const nextChar = String.fromCharCode(65 + parts.length);
    setParts([...parts, { title: `Part ${nextChar}`, items: [{ description: "", amount: "" }] }]);
  };
  const handleDeletePart = (index) => {
    const newParts = parts.filter((_, i) => i !== index);
    setParts(newParts);
  };
  const handleDiscountChange = (index, field, value) => {
    const newDiscounts = [...discounts];
    if (field === "amount") {
      if (value === "" || /^\d{1,9}(\.\d{0,2})?$/.test(value)) {
        newDiscounts[index][field] = value;
        setDiscounts(newDiscounts);
      }
      return;
    }
    newDiscounts[index][field] = value;
    setDiscounts(newDiscounts);
  };
  const handleAddDiscount = () => {
    setDiscounts([...discounts, { label: "", amount: "" }]);
  };
  const handleDeleteDiscount = (index) => {
    const newDiscounts = discounts.filter((_, i) => i !== index);
    setDiscounts(newDiscounts);
  };
  const previewInvoicePDF = async (invoice) => {
    try {
      setPreviewing(invoice._id);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addFileToVFS("Verdana.ttf", verdanaFont);
      pdf.addFont("Verdana.ttf", "Verdana", "normal");
      pdf.addFileToVFS("Verdana-Bold.ttf", verdanaboldFont);
      pdf.addFont("Verdana-Bold.ttf", "Verdana", "bold");
      pdf.addFileToVFS("NotoSans.ttf", notoSansBase64);
      pdf.addFont("NotoSans.ttf", "NotoSans", "normal");
      let currentY = 25;
      pdf.setFillColor(0, 81, 255);
      pdf.rect(10, 5, pageWidth - 20, 28, "F");
      try {
        const logoImg = "/image/excerptwww.png";
        pdf.addImage(logoImg, "PNG", 12, 12, 35, 14);
      } catch (error) {
        console.log("Logo not found, using text instead");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(20);
        pdf.setFont("Verdana", "bold");
        pdf.text("Excerpt", 12, 25);
      }
      const contentX = 60;
      const contentY = 9;
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("NotoSans", "normal");
      pdf.setFontSize(12);
      pdf.text("Excerpt Technologies Pvt Ltd", contentX, contentY);
      pdf.setFont("NotoSans", "normal");
      pdf.setFontSize(8);
      pdf.text("B133/1, 2nd FL, KSSIDC ITI Estate, Whitefield Rd,", contentX, contentY + 5.5);
      pdf.text("Mahadevpura Post, Bangalore – 560048", contentX, contentY + 9.5);
      pdf.text("Phone:+91(636) 465 7660, +91 (990) 050 2404 ", contentX, contentY + 13.5);
      pdf.text("GSTIN:29AAGCE2327K1ZH", contentX, contentY + 17.5);
      pdf.text("LUT No.: AD291021005439D", contentX, contentY + 21.5);
      pdf.setFont("NotoSans", "bold");
      pdf.setFontSize(18);
      pdf.text("INVOICE", pageWidth - 15, contentY + 15.5, { align: "right" });
      pdf.setTextColor(0, 0, 0);
      currentY = 30;
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.05);
      const mainBoxY = currentY;
      const mainBoxHeight = pageHeight - mainBoxY - 20;
      pdf.rect(10, mainBoxY + 3, pageWidth - 20, mainBoxHeight);
      const infoBoxX = 10;
      const infoBoxWidth = pageWidth - 20;
      const infoBoxHeight = 22;
      pdf.rect(infoBoxX, currentY + 3, infoBoxWidth, infoBoxHeight);
      const midX = infoBoxX + infoBoxWidth / 2;
      pdf.line(midX, currentY + 3, midX, currentY + infoBoxHeight + 3);
      pdf.setFontSize(8);
      pdf.setFont("Verdana", "normal");
      pdf.text("Invoice", infoBoxX + 4, currentY + 7);
      pdf.text("Date", infoBoxX + 4, currentY + 12);
      pdf.text("Terms", infoBoxX + 4, currentY + 17);
      pdf.text("Due Date", infoBoxX + 4, currentY + 22);
      pdf.setFont("Verdana", "bold");
      pdf.text(`: ${invoice.invoiceNumber}`, infoBoxX + 28, currentY + 7);
      pdf.text(`: ${formatDate(invoice.date)}`, infoBoxX + 28, currentY + 12);
      pdf.text(`: ${invoice.terms}`, infoBoxX + 28, currentY + 17);
      pdf.text(`: ${formatDate(invoice.dueDate)}`, infoBoxX + 28, currentY + 22);
      currentY += infoBoxHeight + 3;
      const calculateAddressHeight = (billToName, billToCompanyName, billToAddress, billToEmail, billToPhone, billToGstin, shipToName, shipToCompanyName, shipToAddress, shipToEmail, shipToPhone, shipToGstin) => {
        const baseHeight = 12;
        const lineHeight = 4;
        let billToLines = 0;
        if (billToName) billToLines += 1;
        if (billToCompanyName) billToLines += 1;
        if (billToAddress) billToLines += billToAddress.split("\n").length;
        if (billToEmail) billToLines += 1;
        if (billToPhone) billToLines += 1;
        if (billToGstin) billToLines += 1;
        let shipToLines = 0;
        if (shipToName) shipToLines += 1;
        if (shipToCompanyName) shipToLines += 1;
        if (shipToAddress) shipToLines += shipToAddress.split("\n").length;
        if (shipToEmail) shipToLines += 1;
        if (shipToPhone) shipToLines += 1;
        if (shipToGstin) shipToLines += 1;
        const maxLines = Math.max(billToLines, shipToLines);
        return Math.max(baseHeight + maxLines * lineHeight + 8, 36);
      };
      const billToX = 10;
      const shipToX = 105;
      const sectionWidth = 95;
      const sectionHeight = calculateAddressHeight(
        invoice.billToName,
        invoice.billToCompanyName,
        invoice.billToAddress,
        invoice.billToEmail,
        invoice.billToPhone,
        invoice.billToGstin,
        invoice.shipToName,
        invoice.shipToCompanyName,
        invoice.shipToAddress,
        invoice.shipToEmail,
        invoice.shipToPhone,
        invoice.shipToGstin
      );
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.1);
      pdf.setFillColor(220, 220, 220);
      pdf.rect(billToX, currentY, sectionWidth * 2, sectionHeight);
      pdf.line(shipToX, currentY, shipToX, currentY + sectionHeight);
      pdf.rect(billToX + 0.1, currentY + 0.5, sectionWidth - 0.6, 4, "F");
      pdf.rect(shipToX + 0.1, currentY + 0.5, sectionWidth - 0.6, 4, "F");
      pdf.line(billToX, currentY + 4, billToX + sectionWidth, currentY + 4);
      pdf.line(shipToX, currentY + 4, shipToX + sectionWidth, currentY + 4);
      let billToY = currentY + 10;
      let shipToY = currentY + 10;
      billToY += 6;
      shipToY += 6;
      const wrapText = (text, maxWidth) => {
        const words = text.split(" ");
        const lines = [];
        let currentLine = "";
        for (let word of words) {
          const testLine = currentLine + (currentLine ? " " : "") + word;
          const testWidth = pdf.getTextWidth(testLine);
          if (testWidth > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          lines.push(currentLine);
        }
        return lines;
      };
      pdf.setFont("Verdana", "normal");
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(7);
      pdf.setFillColor(230, 230, 230);
      pdf.text("Bill To", billToX + 2, currentY + 3);
      pdf.text("Ship To", shipToX + 2, currentY + 3);
      const renderAddressSection = (x, name, companyName, address, email, phone, gstin) => {
        let yOffset = currentY + 8;
        if (name) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(10);
          pdf.text(name, x + 2, yOffset);
          yOffset += 5;
        }
        if (companyName) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(10);
          pdf.text(companyName, x + 2, yOffset);
          yOffset += 5;
        }
        if (address) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          const maxLineWidth = 80;
          const addressLines = address.split("\n");
          addressLines.forEach((line) => {
            if (line.trim()) {
              const wrappedLines = pdf.splitTextToSize(line.trim(), maxLineWidth);
              wrappedLines.forEach((wrappedLine) => {
                pdf.text(wrappedLine, x + 2, yOffset);
                yOffset += 4;
              });
            }
          });
        }
        if (email) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`EMAIL: ${email}`, x + 2, yOffset);
          yOffset += 4;
        }
        if (phone) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`PHONE: ${phone}`, x + 2, yOffset);
          yOffset += 4;
        }
        if (gstin) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`GSTN: ${gstin}`, x + 2, yOffset);
          yOffset += 4;
        }
      };
      renderAddressSection(
        billToX,
        invoice.billToName,
        invoice.billtocompanyname,
        invoice.billToAddress,
        invoice.billToemail,
        invoice.billTophone,
        invoice.billTogstin
      );
      renderAddressSection(
        shipToX,
        invoice.shipToName,
        invoice.shipTocompanyname,
        invoice.shipToAddress,
        invoice.shipToemail,
        invoice.shipTophone,
        invoice.shipTogstin
      );
      currentY += sectionHeight;
      const tableStartY = currentY;
      const tableStartX = 10;
      const tableWidth = pageWidth - 20;
      const descriptionWidth = tableWidth - 50;
      const amountWidth = 50;
      pdf.setFillColor(230, 230, 230);
      pdf.rect(tableStartX, tableStartY, tableWidth, 6, "F");
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.1);
      pdf.rect(tableStartX, tableStartY, tableWidth, 6);
      pdf.line(tableStartX + descriptionWidth + 20, tableStartY, tableStartX + descriptionWidth + 20, tableStartY + 10);
      pdf.setFontSize(8);
      pdf.setFont("Verdana", "bold");
      pdf.setTextColor(0, 0, 0);
      pdf.text("Items & Description", tableStartX + 3, tableStartY + 4);
      pdf.text("Amount", tableStartX + descriptionWidth + 30, tableStartY + 4);
      currentY = tableStartY + 5;
      let rowNumber = 1;
      const rowHeight = 7;
      if (invoice.parts) {
        invoice.parts.forEach((part, partIndex) => {
          pdf.setFillColor(220, 220, 220);
          pdf.rect(tableStartX, currentY, tableWidth, rowHeight, "F");
          pdf.setDrawColor(0, 0, 0);
          pdf.rect(tableStartX, currentY, tableWidth, rowHeight);
          pdf.line(tableStartX + descriptionWidth + 20, currentY, tableStartX + descriptionWidth + 20, currentY + rowHeight);
          pdf.setFontSize(8);
          pdf.setFont("Verdana", "bold");
          pdf.setTextColor(0, 0, 0);
          pdf.text(part.title, tableStartX + 3, currentY + 4.5);
          currentY += rowHeight - 1;
          if (part.items) {
            part.items.forEach((item, itemIndex) => {
              pdf.setFillColor(255, 255, 255);
              pdf.rect(tableStartX, currentY, tableWidth, rowHeight, "F");
              pdf.setDrawColor(0, 0, 0);
              pdf.rect(tableStartX, currentY, tableWidth, rowHeight);
              pdf.line(tableStartX + descriptionWidth + 20, currentY, tableStartX + descriptionWidth + 20, currentY + rowHeight);
              pdf.line(tableStartX + 7, currentY, tableStartX + 7, currentY + rowHeight);
              pdf.setFontSize(9);
              pdf.setFont("Verdana", "normal");
              pdf.setTextColor(0, 0, 0);
              const description = `${rowNumber}.   ${item.description}`;
              pdf.text(description, tableStartX + 2, currentY + 5.5);
              pdf.setFont("NotoSans", "normal");
              const amountText = formatCurrency(item.amount);
              const amountX = tableStartX + descriptionWidth + amountWidth - 3 - pdf.getTextWidth(amountText);
              pdf.text(amountText, amountX, currentY + 5.5);
              currentY += rowHeight;
              rowNumber++;
            });
          }
        });
      }
      pdf.setDrawColor(0, 0, 0);
      pdf.line(tableStartX, currentY, tableStartX + tableWidth, currentY);
      currentY += 8;
      const leftColumnX = 15;
      const maxTextWidth = 120;
      const rightColumnX = pageWidth - 95;
      const rightColumnWidth = 83;
      pdf.setFontSize(10);
      pdf.setFont("Verdana", "bold");
      pdf.text("Total In Words:", leftColumnX, currentY);
      pdf.setFontSize(10);
      pdf.setFont("NotoSans", "bolditalic");
      const totalInWords = convertNumberToWords(invoice.total);
      const wrappedText = pdf.splitTextToSize(totalInWords, maxTextWidth);
      pdf.text(wrappedText, leftColumnX, currentY + 6);
      pdf.line(pageWidth / 1.5, currentY - 8, pageWidth / 1.5, currentY + 58);
      pdf.line(pageWidth / 1.5, currentY + 58, pageWidth - 10, currentY + 58);
      pdf.setLineWidth(0.35);
      pdf.line(pageWidth / 1.236, currentY - 8, pageWidth / 1.236, currentY + 36);
      pdf.setFontSize(9);
      let rightY = currentY;
      pdf.setFont("Verdana", "normal");
      pdf.text("Sub Total:", rightColumnX + 30, rightY);
      pdf.setFont("NotoSans", "normal");
      const subTotalText = formatCurrency(invoice.subTotal);
      pdf.text(subTotalText, rightColumnX + rightColumnWidth - pdf.getTextWidth(subTotalText), rightY);
      rightY += 6;
      pdf.setFont("Verdana", "normal");
      pdf.text(`CGST (${invoice.cgstRate || 0}%):`, rightColumnX + 30, rightY);
      pdf.setFont("NotoSans", "normal");
      const cgstText = formatCurrency(invoice.cgst || 0);
      pdf.text(cgstText, rightColumnX + rightColumnWidth - pdf.getTextWidth(cgstText), rightY);
      rightY += 6;
      pdf.setFont("Verdana", "normal");
      pdf.text(`SGST (${invoice.sgstRate || 0}%):`, rightColumnX + 30, rightY);
      pdf.setFont("NotoSans", "normal");
      const sgstText = formatCurrency(invoice.sgst || 0);
      pdf.text(sgstText, rightColumnX + rightColumnWidth - pdf.getTextWidth(sgstText), rightY);
      if (invoice.totalDiscount > 0) {
        rightY += 6;
        pdf.setFont("Verdana", "normal");
        pdf.text(`Discount :`, rightColumnX + 30, rightY);
        pdf.setFont("NotoSans", "normal");
        const totalDiscount = formatCurrency(invoice.totalDiscount || 0);
        pdf.text(`- ${totalDiscount}`, rightColumnX + rightColumnWidth - pdf.getTextWidth(sgstText), rightY);
      }
      rightY += 6;
      pdf.setFont("Verdana", "bold");
      pdf.text("Total:", rightColumnX + 30, rightY);
      pdf.setFont("NotoSans", "normal");
      const totalText = formatCurrency(invoice.total);
      for (let i = 0; i < 2; i++) {
        pdf.text(totalText, rightColumnX + rightColumnWidth - pdf.getTextWidth(totalText) + i * 0.2, rightY);
      }
      rightY += 6;
      pdf.setFont("Verdana", "bold");
      pdf.text("Balance Due:", rightColumnX + 30, rightY);
      pdf.setFont("NotoSans", "normal");
      const balanceText = formatCurrency(invoice.balanceDue || invoice.total);
      for (let i = 0; i < 2; i++) {
        pdf.text(balanceText, rightColumnX + rightColumnWidth - pdf.getTextWidth(balanceText) + i * 0.2, rightY);
      }
      currentY += 20;
      pdf.setFontSize(9);
      pdf.setFont("Verdana", "normal");
      pdf.text("Thank you for the valuable business! We will always be at", 15, currentY);
      pdf.text("your desk to support you.", 15, currentY + 5);
      const signatureY = currentY + 15;
      pdf.line(pageWidth / 1.5, signatureY, pageWidth - 10, signatureY);
      try {
        const signatureImg = "./image/sign.webp";
        pdf.addImage(signatureImg, "JPEG", rightColumnX + 55, signatureY + 5, 20, 15);
      } catch (error) {
        console.log("Signature image not found");
      }
      try {
        const sealImg = "./image/seal.webp";
        pdf.addImage(sealImg, "JPEG", rightColumnX + 30, signatureY + 1, 20, 20);
      } catch (error) {
        console.log("Seal image not found");
      }
      try {
        const scannerImg = "./image/scanner.webp";
        pdf.addImage(scannerImg, "PNG", rightColumnX + 40, signatureY + 25, 25, 25);
      } catch (error) {
        console.log("Scanner image not found");
      }
      pdf.setFontSize(7);
      pdf.setFont("Verdana", "normal");
      pdf.text("Authorized Signature", rightColumnX + 50, signatureY + 20);
      currentY = signatureY - 5;
      currentY += 6;
      pdf.setFontSize(8);
      pdf.setFont("Verdana", "bold");
      pdf.text("Terms & Conditions:", 15, currentY);
      pdf.setFont("Verdana", "normal");
      currentY += 5;
      const termsAndConditions = invoice.termsAndConditions || "Full payment is due upon receipt of this invoice. Late payment may incur additional charges as per the applicable rates.";
      const termsLines = wrapText(termsAndConditions, pageWidth - 140);
      termsLines.forEach((line, index) => {
        pdf.text(line, 15, currentY + index * 4);
      });
      currentY += Math.max(termsLines.length * 4, 8);
      currentY += 5;
      pdf.setFontSize(8);
      pdf.setFont("Verdana", "bold");
      pdf.text("Our Bank Details:", 15, currentY);
      currentY += 5;
      pdf.setFont("Verdana", "normal");
      const bankDetails = invoice.bankDetails || `Name: Excerpt Technologies Private Limited
  Account Number: 10063739760
  Name of Bank: IDFC First Bank  
  IFSC Code: IDFB0080151
  PAN No: AAGCE2327K`;
      const bankDetailsLines = bankDetails.split("\n");
      bankDetailsLines.forEach((line, index) => {
        if (index === 0 || index === 1) {
          pdf.setFont("Verdana", "bold");
        } else {
          pdf.setFont("Verdana", "normal");
        }
        pdf.text(line, 15, currentY + index * 4);
      });
      currentY += bankDetailsLines.length - 8;
      pdf.setFontSize(8);
      pdf.setTextColor(0, 0, 255);
      pdf.text("https://excerptech.com", 15, pageHeight - 10);
      pdf.setTextColor(0, 0, 0);
      pdf.text("E-mail: info@excerptech.com", pageWidth - 65, pageHeight - 10);
      const invoiceNumberParts = invoice.invoiceNumber.split("/");
      const lastNumber1 = invoiceNumberParts[invoiceNumberParts.length - 1];
      const companyName1 = invoice.billtocompanyname || invoice.billToCompanyName || "Company";
      const filename = `INV ${lastNumber1} ${companyName1}.pdf`;
      const pdfOutput = pdf.output("bloburl");
      const newWindow = window.open(pdfOutput, "_blank");
      if (newWindow) {
        newWindow.document.title = filename;
      }
    } catch (error) {
      console.error("Error generating PDF preview:", error);
      alert("Error generating PDF preview. Please try again.");
    } finally {
      setPreviewing(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      const response = await axios.post("/invoices", {
        ...invoiceData,
        parts,
        discounts,
        cgstRate,
        sgstRate
      });
      const savedInvoice = response.data;
      setLastInvoiceNumber((prev) => prev + 1);
      await previewInvoicePDF(savedInvoice);
      navigate(`/invoice-display`);
    } catch (error) {
      console.error("Error saving invoice:", error);
      if (error.response?.status === 409) {
        alert(error.response.data.message || "Invoice number already exists!");
      } else {
        alert("Error saving invoice. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-xl-10", children: /* @__PURE__ */ jsxs("form", { className: "invoice-form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "header", children: [
        /* @__PURE__ */ jsx("img", { src: "/image/excerptwww.png", alt: "Excerpt Logo", style: { height: "100px", width: "170px" } }),
        /* @__PURE__ */ jsx("h2", { children: "INVOICE" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "company-info", children: [
        /* @__PURE__ */ jsx("h3", { children: "Excerpt Technologies Pvt Ltd" }),
        /* @__PURE__ */ jsx("p", { children: "B133/1, 2nd Fl, KSSDC ITI Estate, Whitefield Rd," }),
        /* @__PURE__ */ jsx("p", { children: "Mahadevpura Post, Bangalore - 560048" }),
        /* @__PURE__ */ jsx("p", { children: "Phone: +91(636) 465 7660, +91 (990) 050 2404" }),
        /* @__PURE__ */ jsx("p", { children: "GSTIN: 29AAGCE2327K1ZH" }),
        /* @__PURE__ */ jsx("p", { children: "LUT No.: AD291021005439D" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-xl-2", children: [
            /* @__PURE__ */ jsx("label", { children: "Invoice: " }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "invoiceNumber", className: "form-control form-control-sm", value: invoiceData.invoiceNumber, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-xl-2", children: [
            /* @__PURE__ */ jsx("label", { children: "Year:" }),
            /* @__PURE__ */ jsxs("select", { name: "year", value: invoiceData.year, className: "form-control form-control-sm", onChange: handleInvoiceDataChange, children: [
              /* @__PURE__ */ jsx("option", { value: "25-26", children: "2025-2026" }),
              /* @__PURE__ */ jsx("option", { value: "26-27", children: "2026-2027" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-xl-2", children: [
            /* @__PURE__ */ jsx("label", { children: "Date:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                name: "date",
                className: "form-control form-control-sm",
                value: invoiceData.date,
                onChange: handleInvoiceDataChange,
                onKeyDown: (e) => {
                  if (!["Tab", "Enter", "Escape"].includes(e.key)) {
                    e.preventDefault();
                  }
                },
                onFocus: (e) => e.target.showPicker && e.target.showPicker(),
                style: dateInputStyle
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-xl-2", children: [
            /* @__PURE__ */ jsx("label", { children: "Terms:" }),
            /* @__PURE__ */ jsx("input", { type: "text", className: "form-control form-control-sm", name: "terms", value: invoiceData.terms, onChange: handleInvoiceDataChange })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-xl-2", children: [
            /* @__PURE__ */ jsx("label", { children: "Due Date:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                className: "form-control form-control-sm",
                name: "dueDate",
                value: invoiceData.dueDate,
                onChange: handleInvoiceDataChange,
                onKeyDown: (e) => {
                  if (!["Tab", "Enter", "Escape"].includes(e.key)) {
                    e.preventDefault();
                  }
                },
                onFocus: (e) => e.target.showPicker && e.target.showPicker(),
                style: dateInputStyle
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-xl-6", children: [
            /* @__PURE__ */ jsx("h4", { children: "Bill To:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "billToName",
                placeholder: "Name",
                value: invoiceData.billToName,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "billtocompanyname",
                placeholder: "Company Name",
                value: invoiceData.billtocompanyname,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "billToAddress",
                placeholder: "Address",
                value: invoiceData.billToAddress,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "billTophone",
                placeholder: "+91XXXXXXXXXX",
                value: invoiceData.billTophone,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.billTophone && !validatePhone(invoiceData.billTophone) ? "red" : ""
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "billToemail",
                placeholder: "email@example.com",
                value: invoiceData.billToemail,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.billToemail && !validateEmail(invoiceData.billToemail) ? "red" : ""
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "billTogstin",
                placeholder: "15 digit GST number",
                value: invoiceData.billTogstin,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.billTogstin && !validateGST(invoiceData.billTogstin) ? "red" : ""
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ship-to col-xl-6", children: [
            /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }, children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: sameAsBillTo, onChange: handleSameAsBillTo }),
              "Ship To same as Bill To"
            ] }) }),
            /* @__PURE__ */ jsx("h4", { children: "Ship To:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "shipToName",
                placeholder: "Name",
                value: invoiceData.shipToName,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "shipTocompanyname",
                placeholder: "Company Name",
                value: invoiceData.shipTocompanyname,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "shipToAddress",
                placeholder: "Address",
                value: invoiceData.shipToAddress,
                onChange: handleInvoiceDataChange
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "shipTophone",
                placeholder: "+91XXXXXXXXXX",
                value: invoiceData.shipTophone,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.shipTophone && !validatePhone(invoiceData.shipTophone) ? "red" : ""
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "shipToemail",
                placeholder: "email@example.com",
                value: invoiceData.shipToemail,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.shipToemail && !validateEmail(invoiceData.shipToemail) ? "red" : ""
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "shipTogstin",
                placeholder: "15 digit GST number",
                value: invoiceData.shipTogstin,
                onChange: handleInvoiceDataChange,
                style: {
                  borderColor: invoiceData.shipTogstin && !validateGST(invoiceData.shipTogstin) ? "red" : ""
                }
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("table", { children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "Item & Description" }),
          /* @__PURE__ */ jsx("th", { children: "Amount" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: parts.map((part, partIndex) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
          /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", { colSpan: "2", style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsx("label", { style: { fontWeight: "bold", minWidth: "100px" }, children: "Part Title:" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: part.title,
                onChange: (e) => handlePartTitleChange(partIndex, e.target.value),
                style: { flexGrow: 1, fontWeight: "bold", fontSize: "1.1em" }
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleDeletePart(partIndex),
                style: {
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px"
                },
                children: "Delete"
              }
            )
          ] }) }),
          part.items.map((item, itemIndex) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Description",
                value: item.description,
                onChange: (e) => handlePartItemChange(partIndex, itemIndex, "description", e.target.value),
                required: true
              }
            ) }),
            /* @__PURE__ */ jsxs("td", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Amount",
                  value: item.amount,
                  onChange: (e) => handlePartItemChange(partIndex, itemIndex, "amount", e.target.value),
                  min: "0",
                  step: "0.01",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleDeletePartItem(partIndex, itemIndex),
                  style: {
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px 10px"
                  },
                  children: "Delete"
                }
              )
            ] })
          ] }, itemIndex)),
          /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "2", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => handleAddPartItem(partIndex), children: [
            "+ Add Item to ",
            part.title
          ] }) }) })
        ] }, partIndex)) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "15px" }, children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleAddNewPart, children: "+ Add New Part" }) }),
      /* @__PURE__ */ jsxs("div", { className: "discount-section", style: { marginTop: "20px", marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsx("h4", { children: "Discounts:" }),
        /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Discount Label" }),
            /* @__PURE__ */ jsx("th", { children: "Amount" }),
            /* @__PURE__ */ jsx("th", { children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: discounts.map((discount, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Discount description",
                value: discount.label,
                onChange: (e) => handleDiscountChange(index, "label", e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Discount amount",
                value: discount.amount,
                onChange: (e) => handleDiscountChange(index, "amount", e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleDeleteDiscount(index),
                style: {
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px"
                },
                children: "Delete"
              }
            ) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: handleAddDiscount, style: { marginTop: "10px" }, children: "+ Add Discount" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "invoice-summary", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Sub Total:",
          /* @__PURE__ */ jsx("input", { type: "number", value: invoiceData.subTotal, readOnly: true })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "CGST (%):",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: cgstRate,
              onChange: handleCgstRateChange,
              placeholder: "Enter CGST %",
              onInput: (e) => {
                const val = e.target.value;
                if (/^\d{0,2}(\.\d{0,2})?$/.test(val) || val === "") {
                  e.target.value = val;
                } else {
                  e.target.value = cgstRate;
                }
              },
              inputMode: "decimal"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "SGST (%):",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: sgstRate,
              onChange: handleSgstRateChange,
              placeholder: "Enter SGST %",
              onInput: (e) => {
                const val = e.target.value;
                if (/^\d{0,2}(\.\d{0,2})?$/.test(val) || val === "") {
                  e.target.value = val;
                } else {
                  e.target.value = cgstRate;
                }
              },
              inputMode: "decimal"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "CGST Amount:",
          /* @__PURE__ */ jsx("input", { type: "number", value: invoiceData.cgst, readOnly: true })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "SGST Amount:",
          /* @__PURE__ */ jsx("input", { type: "number", value: invoiceData.sgst, readOnly: true })
        ] }),
        /* @__PURE__ */ jsxs("label", { style: { fontWeight: "bold" }, children: [
          "Total:",
          /* @__PURE__ */ jsx("input", { type: "number", value: invoiceData.total, readOnly: true })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Balance Due:",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "balanceDue",
              value: invoiceData.balanceDue,
              onChange: handleInvoiceDataChange,
              onInput: (e) => {
                const val = e.target.value;
                if (/^\d*\.?\d{0,2}$/.test(val) || val === "") {
                  e.target.value = val;
                } else {
                  e.target.value = invoiceData.balanceDue;
                }
              },
              inputMode: "decimal",
              placeholder: "Enter amount"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Total In Words:",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "totalInWords",
              value: invoiceData.totalInWords,
              onChange: handleInvoiceDataChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "additional-fields", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Thank You Message:",
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "thankYouMessage",
              value: invoiceData.thankYouMessage,
              onChange: handleInvoiceDataChange,
              rows: 3,
              style: { width: "100%", resize: "vertical" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Terms & Conditions:",
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "termsAndConditions",
              value: invoiceData.termsAndConditions,
              onChange: handleInvoiceDataChange,
              rows: 4,
              style: { width: "100%", resize: "vertical" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Bank Details:",
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "bankDetails",
              value: invoiceData.bankDetails,
              onChange: handleInvoiceDataChange,
              rows: 6,
              style: { width: "100%", resize: "vertical" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: saving,
          className: "btn btn-primary",
          style: { width: "180px" },
          children: saving ? "Saving & Generating..." : "Save & Preview PDF"
        }
      )
    ] }) })
  ] }) });
};
export {
  InvoiceForm as default
};
