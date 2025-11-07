import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { v as verdanaFont, a as verdanaboldFont, n as notoSansBase64 } from "./verdanbold-B2YmcHcO.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
import "react-toastify";
import "pdf-lib";
import "@pdf-lib/fontkit";
import "qrcode";
import "lodash.debounce";
import "classnames";
import "resize-observer-polyfill";
import "json2mq";
import "react-ga";
const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloading, setDownloading] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [updating, setUpdating] = useState(false);
  const [invoiceNumberStatus, setInvoiceNumberStatus] = useState({
    isChecking: false,
    isDuplicate: false,
    isValid: false
  });
  const debounceTimer = useRef(null);
  useEffect(() => {
    fetchInvoices();
  }, []);
  const fetchInvoices = async () => {
    try {
      const response = await axios.get("/invoices");
      setInvoices(response.data);
      setLoading(false);
    } catch (error2) {
      setError(error2.response?.data?.message || "Error fetching invoices");
      setLoading(false);
    }
  };
  const [cgstRate, setCgstRate] = useState("");
  const [sgstRate, setSgstRate] = useState("");
  const openEditModal = (invoice) => {
    setInvoiceNumberStatus({ isChecking: false, isDuplicate: false, isValid: false });
    setEditingInvoice(invoice);
    setEditFormData({
      invoiceNumber: invoice.invoiceNumber,
      // Make this editable
      date: invoice.date ? invoice.date.split("T")[0] : "",
      terms: invoice.terms || "",
      dueDate: invoice.dueDate ? invoice.dueDate.split("T")[0] : "",
      billToName: invoice.billToName || "",
      billtocompanyname: invoice.billtocompanyname || "",
      billToAddress: invoice.billToAddress || "",
      billToemail: invoice.billToemail || "",
      billTophone: invoice.billTophone || "",
      billTogstin: invoice.billTogstin || "",
      shipToName: invoice.shipToName || "",
      shipTocompanyname: invoice.shipTocompanyname || "",
      shipToAddress: invoice.shipToAddress || "",
      shipToemail: invoice.shipToemail || "",
      shipTophone: invoice.shipTophone || "",
      shipTogstin: invoice.shipTogstin || "",
      balanceDue: invoice.balanceDue || invoice.total || "",
      // Show total as balance due
      totalInWords: invoice.totalInWords || "",
      thankYouMessage: invoice.thankYouMessage || "",
      termsAndConditions: invoice.termsAndConditions || "",
      bankDetails: invoice.bankDetails || "",
      parts: invoice.parts || [{ title: "Part A", items: [{ description: "", amount: "" }] }],
      cgstRate: invoice.cgstRate || "",
      sgstRate: invoice.sgstRate || "",
      total: invoice.total || "",
      // Add total field
      discounts: invoice.discounts
    });
    setShowEditModal(true);
  };
  const handlePartTitleChange = (index, value) => {
    const newParts = [...editFormData.parts];
    newParts[index].title = value;
    setEditFormData((prev) => ({
      ...prev,
      parts: newParts
    }));
  };
  const calculateTotals = (parts, cgstRate2 = 0, sgstRate2 = 0, discounts = []) => {
    const subTotal = parts.reduce((total2, part) => {
      const partTotal = part.items.reduce((partSum, item) => {
        return partSum + (parseFloat(item.amount) || 0);
      }, 0);
      return total2 + partTotal;
    }, 0);
    const totalDiscount = discounts.reduce((total2, discount) => {
      return total2 + (parseFloat(discount.amount) || 0);
    }, 0);
    const taxableAmount = subTotal - totalDiscount;
    const cgst = taxableAmount * (parseFloat(cgstRate2) || 0) / 100;
    const sgst = taxableAmount * (parseFloat(sgstRate2) || 0) / 100;
    const total = taxableAmount + cgst + sgst;
    return {
      subTotal: subTotal.toFixed(2),
      totalDiscount: totalDiscount.toFixed(2),
      cgst: cgst.toFixed(2),
      sgst: sgst.toFixed(2),
      total: total.toFixed(2)
    };
  };
  useEffect(() => {
    if (editFormData.parts && editFormData.parts.length > 0) {
      const calculations = calculateTotals(
        editFormData.parts,
        editFormData.cgstRate,
        editFormData.sgstRate,
        editFormData.discounts || []
        // ADD THIS LINE
      );
      setEditFormData((prev) => ({
        ...prev,
        subTotal: calculations.subTotal,
        totalDiscount: calculations.totalDiscount,
        // ADD THIS LINE
        cgst: calculations.cgst,
        sgst: calculations.sgst,
        total: calculations.total,
        balanceDue: calculations.total,
        totalInWords: convertNumberToWords(calculations.total)
      }));
    }
  }, [editFormData.parts, editFormData.cgstRate, editFormData.sgstRate, editFormData.discounts]);
  const handleDiscountChange = (index, field, value) => {
    const newDiscounts = [...editFormData.discounts || []];
    if (field === "amount") {
      if (value === "" || /^\d{1,9}(\.\d{0,2})?$/.test(value)) {
        newDiscounts[index][field] = value;
        setEditFormData((prev) => ({
          ...prev,
          discounts: newDiscounts
        }));
      }
      return;
    }
    newDiscounts[index][field] = value;
    setEditFormData((prev) => ({
      ...prev,
      discounts: newDiscounts
    }));
  };
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
  const handleAddDiscount = () => {
    setEditFormData((prev) => ({
      ...prev,
      discounts: [{ label: "", amount: "" }]
    }));
  };
  const handleDeleteDiscount = (index) => {
    const newDiscounts = [...editFormData.discounts || []];
    newDiscounts.splice(index, 1);
    setEditFormData((prev) => ({
      ...prev,
      discounts: newDiscounts
    }));
  };
  const handlePartItemChange = (partIndex, itemIndex, field, value) => {
    const newParts = [...editFormData.parts];
    newParts[partIndex].items[itemIndex][field] = value;
    setEditFormData((prev) => ({
      ...prev,
      parts: newParts
    }));
  };
  const addPartItem = (partIndex) => {
    const newParts = [...editFormData.parts];
    newParts[partIndex].items.push({ description: "", amount: "" });
    setEditFormData((prev) => ({
      ...prev,
      parts: newParts
    }));
  };
  const removePartItem = (partIndex, itemIndex) => {
    const newParts = [...editFormData.parts];
    newParts[partIndex].items.splice(itemIndex, 1);
    setEditFormData((prev) => ({
      ...prev,
      parts: newParts
    }));
  };
  const addNewPart = () => {
    const nextChar = String.fromCharCode(65 + editFormData.parts.length);
    setEditFormData((prev) => ({
      ...prev,
      parts: [...prev.parts, { title: `Part ${nextChar}`, items: [{ description: "", amount: "" }] }]
    }));
  };
  const removePart = (index) => {
    const newParts = editFormData.parts.filter((_, i) => i !== index);
    setEditFormData((prev) => ({
      ...prev,
      parts: newParts
    }));
  };
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
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewPdfUrl, setPreviewPdfUrl] = useState(null);
  const [previewing, setPreviewing] = useState(null);
  const downloadInvoicePDF = async (invoice) => {
    try {
      setDownloading(invoice._id);
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
        const logoImg = `${window.location.origin}/image/excerptwww.png`;
        console.log(logoImg);
        pdf.addImage(logoImg, "PNG", 12, 12, 35, 14);
      } catch (error2) {
        console.log("Logo not found, using text instead");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(20);
        pdf.setFont("Verdana", "bold");
        pdf.text("Excerpt", 12, 25);
      }
      const contentX = 60;
      const contentY = 10;
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
      const renderAddressSection = (x, name, companyName2, address, email, phone, gstin) => {
        let yOffset = currentY + 8;
        if (name) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(9);
          pdf.text(name, x + 2, yOffset);
          yOffset += 4;
        }
        if (companyName2) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(9);
          pdf.text(companyName2, x + 2, yOffset);
          yOffset += 4;
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
                yOffset += 3;
              });
            }
          });
        }
        if (email) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`EMAIL: ${email}`, x + 2, yOffset + 1);
          yOffset += 3;
        }
        if (phone) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`PHONE: ${phone}`, x + 2, yOffset + 1);
          yOffset += 3;
        }
        if (gstin) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`GSTIN: ${gstin}`, x + 2, yOffset + 1);
          yOffset += 3;
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
              const rupeeX = tableStartX + descriptionWidth + 23;
              const amountText = formatCurrency(item.amount);
              const valueText = amountText.replace("₹", "").trim();
              const valueX = rupeeX + 5;
              pdf.setFont("NotoSans", "normal");
              pdf.text("₹", rupeeX + 2, currentY + 5.5);
              pdf.text(valueText, valueX + 2, currentY + 5.5);
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
      pdf.setFontSize(9);
      pdf.setFont("NotoSans", "bolditalic");
      const totalInWords = convertNumberToWords(invoice.total);
      const wrappedText = pdf.splitTextToSize(totalInWords, maxTextWidth);
      pdf.text(wrappedText, leftColumnX, currentY + 6);
      pdf.line(pageWidth / 1.5, currentY - 8, pageWidth / 1.5, currentY + 62);
      pdf.line(pageWidth / 1.5, currentY + 62, pageWidth - 10, currentY + 62);
      pdf.setLineWidth(0.35);
      pdf.line(pageWidth / 1.236, currentY - 8, pageWidth / 1.236, currentY + 36);
      pdf.setFontSize(9);
      const amountX = rightColumnX + 60;
      let rightY = currentY;
      pdf.setFont("Verdana", "normal");
      const subTotalLabel = "Sub Total:";
      pdf.text(subTotalLabel, amountX - pdf.getTextWidth(subTotalLabel) - 10, rightY);
      pdf.setFont("NotoSans", "normal");
      const subTotalText = formatCurrency(invoice.subTotal || 0);
      pdf.text("₹", amountX, rightY);
      pdf.text(subTotalText.replace("₹", "").trim(), amountX + 5, rightY);
      rightY += 6;
      pdf.setFont("Verdana", "normal");
      const cgstLabel = `CGST (${invoice.cgstRate || 0}%):`;
      pdf.text(cgstLabel, amountX - pdf.getTextWidth(cgstLabel) - 10, rightY);
      pdf.setFont("NotoSans", "normal");
      const cgstText = formatCurrency(invoice.cgst || 0);
      pdf.text("₹", amountX, rightY);
      pdf.text(cgstText.replace("₹", "").trim(), amountX + 5, rightY);
      rightY += 6;
      pdf.setFont("Verdana", "normal");
      const sgstLabel = `SGST (${invoice.sgstRate || 0}%):`;
      pdf.text(sgstLabel, amountX - pdf.getTextWidth(sgstLabel) - 10, rightY);
      pdf.setFont("NotoSans", "normal");
      const sgstText = formatCurrency(invoice.sgst || 0);
      pdf.text("₹", amountX, rightY);
      pdf.text(sgstText.replace("₹", "").trim(), amountX + 5, rightY);
      if (invoice.totalDiscount > 0) {
        rightY += 6;
        pdf.setFont("Verdana", "normal");
        const discountLabel = "Discount :";
        pdf.text(discountLabel, amountX - pdf.getTextWidth(discountLabel) - 10, rightY);
        pdf.setFont("NotoSans", "normal");
        const discountText = formatCurrency(invoice.totalDiscount || 0);
        pdf.text("₹", amountX, rightY);
        pdf.text(`-${discountText.replace("₹", "").trim()}`, amountX + 5, rightY);
      }
      rightY += 6;
      pdf.setFont("Verdana", "bold");
      const totalLabel = "Total:";
      pdf.text(totalLabel, amountX - pdf.getTextWidth(totalLabel) - 10, rightY);
      pdf.setFont("NotoSans", "normal");
      const totalText = formatCurrency(invoice.total);
      for (let i = 0; i < 2; i++) {
        pdf.text("₹", amountX + i * 0.2, rightY);
        pdf.text(totalText.replace("₹", "").trim(), amountX + 5 + i * 0.2, rightY);
      }
      rightY += 6;
      pdf.setFont("Verdana", "bold");
      const balanceLabel = "Balance Due:";
      pdf.text(balanceLabel, amountX - pdf.getTextWidth(balanceLabel) - 10, rightY);
      pdf.setFont("NotoSans", "normal");
      const balanceText = formatCurrency(invoice.balanceDue || invoice.total);
      for (let i = 0; i < 2; i++) {
        pdf.text("₹", amountX + i * 0.2, rightY);
        pdf.text(balanceText.replace("₹", "").trim(), amountX + 5 + i * 0.2, rightY);
      }
      currentY += 20;
      pdf.setFontSize(9);
      pdf.setFont("Verdana", "normal");
      pdf.text("Thank you for the valuable business! We will always be at", 15, currentY);
      pdf.text("your desk to support you.", 15, currentY + 5);
      const signatureY = currentY + 15;
      pdf.line(pageWidth / 1.5, signatureY, pageWidth - 10, signatureY);
      try {
        const signatureImg = `${window.location.origin}/image/sign.jpeg`;
        console.log(signatureImg);
        pdf.addImage(signatureImg, "JPEG", rightColumnX + 55, signatureY + 3, 25, 15);
      } catch (error2) {
        console.log("Signature image not found");
      }
      try {
        const sealImg = `${window.location.origin}/image/seal.jpeg`;
        pdf.addImage(sealImg, "JPEG", rightColumnX + 30, signatureY + 1, 22, 22);
      } catch (error2) {
        console.log("Seal image not found");
      }
      try {
        const scannerImg = `${window.location.origin}/image/scanner.png`;
        pdf.addImage(scannerImg, "PNG", rightColumnX + 40, signatureY + 30, 25, 25);
      } catch (error2) {
        console.log("Scanner image not found");
      }
      pdf.setFontSize(7);
      pdf.setFont("Verdana", "normal");
      pdf.text("Authorized Signature", rightColumnX + 55, signatureY + 20);
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
      const companyName = invoice.billtocompanyname || invoice.billToCompanyName || "Company";
      const filename = `INV ${lastNumber1} ${companyName}.pdf`;
      pdf.save(filename);
    } catch (error2) {
      console.error("Error generating PDF:", error2);
      alert("Error generating PDF. Please try again.");
    } finally {
      setDownloading(null);
    }
  };
  const [sameAsBillTo, setSameAsBillTo] = useState(false);
  const handleSameAsBillTo = (e) => {
    const isChecked = e.target.checked;
    setSameAsBillTo(isChecked);
    if (isChecked) {
      setEditFormData((prev) => ({
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
  const checkInvoiceNumberWithDebounce = async (invoiceNumber, currentInvoiceId = null) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    setInvoiceNumberStatus({
      isChecking: true,
      isDuplicate: false,
      isValid: false
    });
    debounceTimer.current = setTimeout(async () => {
      if (!invoiceNumber.trim()) {
        setInvoiceNumberStatus({
          isChecking: false,
          isDuplicate: false,
          isValid: false
        });
        return;
      }
      try {
        const response = await axios.get(`/api/check-invoice-number`, {
          params: { invoiceNumber }
        });
        console.log("Checking invoice number:", invoiceNumber);
        console.log("Invoice number check response:", response.data);
        const isSameInvoice = currentInvoiceId && response.data.invoiceId === currentInvoiceId;
        const isDuplicate = response.data.exists && !isSameInvoice;
        setInvoiceNumberStatus({
          isChecking: false,
          isDuplicate,
          isValid: !isDuplicate && invoiceNumber.trim() !== ""
        });
      } catch (error2) {
        console.error("Error checking invoice number:", error2);
        setInvoiceNumberStatus({
          isChecking: false,
          isDuplicate: false,
          isValid: false
        });
      }
    }, 500);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      if (sameAsBillTo) {
        const billToShipToMapping = {
          billToName: "shipToName",
          billtocompanyname: "shipTocompanyname",
          billToAddress: "shipToAddress",
          billToemail: "shipToemail",
          billTophone: "shipTophone",
          billTogstin: "shipTogstin"
        };
        if (billToShipToMapping[name]) {
          updatedData[billToShipToMapping[name]] = value;
        }
      }
      return updatedData;
    });
    if (name === "invoiceNumber") {
      checkInvoiceNumberWithDebounce(value, editingInvoice?._id);
    }
  };
  const [isDuplicateInvoiceNumber, setIsDuplicateInvoiceNumber] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  useEffect(() => {
    let filtered = invoices;
    if (searchTerm) {
      filtered = invoices.filter(
        (invoice) => invoice.invoiceNumber?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.billToName?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.shipToName?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.billToAddress?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.shipToAddress?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.billToCity?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.shipToCity?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.terms?.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.total?.toString().includes(searchTerm) || new Date(invoice.date).toLocaleDateString("en-GB").includes(searchTerm)
      );
    }
    filtered.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
    setFilteredInvoices(filtered);
    setCurrentPage(1);
  }, [invoices, searchTerm]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const PaginationComponent = () => /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column flex-md-row justify-content-between align-items-center mt-3", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-2 mb-md-0", children: /* @__PURE__ */ jsxs("small", { className: "text-muted", children: [
      "Showing ",
      indexOfFirstItem + 1,
      " to ",
      Math.min(indexOfLastItem, filteredInvoices.length),
      " of ",
      filteredInvoices.length,
      " entries"
    ] }) }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "pagination pagination-sm mb-0", children: [
      /* @__PURE__ */ jsx("li", { className: `page-item ${currentPage === 1 ? "disabled" : ""}`, children: /* @__PURE__ */ jsxs(
        "button",
        {
          className: "page-link",
          onClick: handlePrevious,
          disabled: currentPage === 1,
          type: "button",
          children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-left" }),
            " Previous"
          ]
        }
      ) }),
      (() => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        if (endPage - startPage + 1 < maxVisiblePages) {
          startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        if (startPage > 1) {
          pages.push(
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("button", { className: "page-link", onClick: () => paginate(1), type: "button", children: "1" }) }, 1)
          );
          if (startPage > 2) {
            pages.push(
              /* @__PURE__ */ jsx("li", { className: "page-item disabled", children: /* @__PURE__ */ jsx("span", { className: "page-link", children: "..." }) }, "ellipsis1")
            );
          }
        }
        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            /* @__PURE__ */ jsx("li", { className: `page-item ${currentPage === i ? "active" : ""}`, children: /* @__PURE__ */ jsx("button", { className: "page-link", onClick: () => paginate(i), type: "button", children: i }) }, i)
          );
        }
        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            pages.push(
              /* @__PURE__ */ jsx("li", { className: "page-item disabled", children: /* @__PURE__ */ jsx("span", { className: "page-link", children: "..." }) }, "ellipsis2")
            );
          }
          pages.push(
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("button", { className: "page-link", onClick: () => paginate(totalPages), type: "button", children: totalPages }) }, totalPages)
          );
        }
        return pages;
      })(),
      /* @__PURE__ */ jsx("li", { className: `page-item ${currentPage === totalPages ? "disabled" : ""}`, children: /* @__PURE__ */ jsxs(
        "button",
        {
          className: "page-link",
          onClick: handleNext,
          disabled: currentPage === totalPages,
          type: "button",
          children: [
            "Next ",
            /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-right" })
          ]
        }
      ) })
    ] }) })
  ] });
  const previewInvoicePDF = async (invoice) => {
    try {
      setPreviewLoading(invoice._id);
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
        const logoImg = `${window.location.origin}/image/excerptwww.png`;
        pdf.addImage(logoImg, "PNG", 12, 12, 35, 14);
      } catch (error2) {
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
          pdf.setFontSize(9);
          pdf.text(name, x + 2, yOffset);
          yOffset += 4;
        }
        if (companyName) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(9);
          pdf.text(companyName, x + 2, yOffset);
          yOffset += 4;
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
                yOffset += 3;
              });
            }
          });
        }
        if (email) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`EMAIL: ${email}`, x + 2, yOffset + 1);
          yOffset += 3;
        }
        if (phone) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`PHONE: ${phone}`, x + 2, yOffset + 1);
          yOffset += 3;
        }
        if (gstin) {
          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(7);
          pdf.text(`GSTIN: ${gstin}`, x + 2, yOffset + 1);
          yOffset += 3;
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
        const signatureImg = `${window.location.origin}/image/sign.jpeg`;
        console.log(signatureImg);
        pdf.addImage(signatureImg, "JPEG", rightColumnX + 55, signatureY + 3, 25, 15);
      } catch (error2) {
        console.log("Signature image not found");
      }
      try {
        const sealImg = `${window.location.origin}/image/seal.jpeg`;
        pdf.addImage(sealImg, "JPEG", rightColumnX + 30, signatureY + 1, 20, 20);
      } catch (error2) {
        console.log("Seal image not found");
      }
      try {
        const scannerImg = `${window.location.origin}/image/scanner.png`;
        pdf.addImage(scannerImg, "PNG", rightColumnX + 40, signatureY + 25, 25, 25);
      } catch (error2) {
        console.log("Scanner image not found");
      }
      pdf.setFontSize(7);
      pdf.setFont("Verdana", "normal");
      pdf.text("Authorized Signature", rightColumnX + 55, signatureY + 20);
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
    } catch (error2) {
      console.error("Error generating PDF preview:", error2);
      alert("Error generating PDF preview. Please try again.");
    } finally {
      setPreviewLoading(null);
    }
  };
  const handleUpdateInvoice = async () => {
    const isDuplicate = await checkInvoiceNumberWithDebounce(
      editFormData.invoiceNumber,
      editingInvoice._id
    );
    if (isDuplicate) {
      alert("This invoice number already exists! Please use a different invoice number.");
      return;
    }
    setUpdating(true);
    try {
      const response = await axios.put(`/invoices/${editingInvoice._id}`, editFormData);
      setInvoices(
        (prev) => prev.map(
          (inv) => inv._id === editingInvoice._id ? response.data : inv
        )
      );
      setShowEditModal(false);
      setEditingInvoice(null);
      alert("Invoice updated successfully!");
      setTimeout(() => {
        previewInvoicePDF(response.data);
      }, 200);
    } catch (error2) {
      console.error("Error updating invoice:", error2);
      alert("Error updating invoice: " + (error2.response?.data?.message || error2.message));
    } finally {
      setUpdating(false);
    }
  };
  const handleDeleteInvoice = async (invoiceId, invoiceNumber) => {
    if (window.confirm(`Are you sure you want to delete invoice ${invoiceNumber}?`)) {
      try {
        await axios.delete(`/invoices/${invoiceId}`);
        setInvoices((prev) => prev.filter((inv) => inv._id !== invoiceId));
        alert("Invoice deleted successfully!");
      } catch (error2) {
        console.error("Error deleting invoice:", error2);
        alert("Error deleting invoice: " + (error2.response?.data?.message || error2.message));
      }
    }
  };
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [cloning, setCloning] = useState(false);
  const getNextInvoiceNumber = async () => {
    try {
      const response = await axios.get("/last-invoice-number");
      const lastNumber = response.data.lastNumber;
      const nextNumber = lastNumber + 1;
      const paddedNumber = nextNumber.toString().padStart(3, "0");
      return `ETPL/24-25/${paddedNumber}`;
    } catch (error2) {
      console.error("Error fetching next invoice number:", error2);
      return "PKV/001";
    }
  };
  const openCloneModal = async (invoice) => {
    try {
      setCloning(true);
      setInvoiceNumberStatus({ isChecking: false, isDuplicate: false, isValid: false });
      const nextInvoiceNumber = await getNextInvoiceNumber();
      setEditingInvoice(null);
      setEditFormData({
        invoiceNumber: nextInvoiceNumber,
        // NEW invoice number
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        // TODAY's date
        terms: invoice.terms || "",
        dueDate: "",
        // EMPTY due date
        billToName: invoice.billToName || "",
        billtocompanyname: invoice.billtocompanyname || "",
        billToAddress: invoice.billToAddress || "",
        billToemail: invoice.billToemail || "",
        billTophone: invoice.billTophone || "",
        billTogstin: invoice.billTogstin || "",
        shipToName: invoice.shipToName || "",
        shipTocompanyname: invoice.shipTocompanyname || "",
        shipToAddress: invoice.shipToAddress || "",
        shipToemail: invoice.shipToemail || "",
        shipTophone: invoice.shipTophone || "",
        shipTogstin: invoice.shipTogstin || "",
        balanceDue: "",
        // EMPTY
        totalInWords: "",
        thankYouMessage: invoice.thankYouMessage || "",
        termsAndConditions: invoice.termsAndConditions || "",
        bankDetails: invoice.bankDetails || "",
        parts: [{ title: "Part A", items: [{ description: "", amount: "" }] }],
        // EMPTY parts
        cgstRate: invoice.cgstRate || "",
        sgstRate: invoice.sgstRate || "",
        total: "",
        // EMPTY total
        discounts: []
        // EMPTY discounts
      });
      setShowCloneModal(true);
    } catch (error2) {
      console.error("Error preparing clone:", error2);
      alert("Error preparing clone: " + error2.message);
    } finally {
      setCloning(false);
    }
  };
  const handleSaveClone = async () => {
    const isDuplicate = await checkInvoiceNumberWithDebounce(editFormData.invoiceNumber);
    if (isDuplicate) {
      alert("This invoice number already exists! Please use a different invoice number.");
      return;
    }
    setUpdating(true);
    try {
      const response = await axios.post("/invoices", editFormData);
      setInvoices((prev) => [response.data, ...prev]);
      setShowCloneModal(false);
      alert("Invoice cloned successfully!");
      setTimeout(() => {
        previewInvoicePDF(response.data);
      }, 200);
    } catch (error2) {
      console.error("Error saving invoice:", error2);
      if (error2.response?.status === 409) {
        alert(error2.response.data.message || "Invoice number already exists!");
      } else {
        alert("Error saving invoice. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsx("div", { className: "loading", children: "Loading invoices..." });
  if (error) return /* @__PURE__ */ jsxs("div", { className: "error", children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-xl-10", children: /* @__PURE__ */ jsxs("div", { className: "invoice-list-container", children: [
      /* @__PURE__ */ jsx("h2", { children: "All Invoices" }),
      invoices.length === 0 ? /* @__PURE__ */ jsx("div", { className: "no-invoices", children: "No invoices found." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "row mb-3 align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "form-control",
              placeholder: "Search invoices (number, customer, address, amount, etc.)",
              value: searchTerm,
              onChange: handleSearchChange
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-md-6 ", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-end", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label me-2 mb-0", children: "Show:" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "form-select w-auto",
                value: itemsPerPage,
                onChange: handleItemsPerPageChange,
                style: { minWidth: "80px" },
                children: [
                  /* @__PURE__ */ jsx("option", { value: 5, children: "5" }),
                  /* @__PURE__ */ jsx("option", { value: 10, children: "10" }),
                  /* @__PURE__ */ jsx("option", { value: 25, children: "25" }),
                  /* @__PURE__ */ jsx("option", { value: 50, children: "50" }),
                  /* @__PURE__ */ jsx("option", { value: 100, children: "100" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ms-2", children: "per page" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { children: "Invoice Number" }),
            /* @__PURE__ */ jsx("th", { children: "Date" }),
            /* @__PURE__ */ jsx("th", { children: "Bill To" }),
            /* @__PURE__ */ jsx("th", { children: "Services" }),
            /* @__PURE__ */ jsx("th", { children: "Total Amount" }),
            /* @__PURE__ */ jsx("th", { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: currentInvoices.map((invoice) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { children: invoice.invoiceNumber }),
            /* @__PURE__ */ jsx("td", { children: new Date(invoice.date).toLocaleDateString("en-GB") }),
            /* @__PURE__ */ jsx("td", { style: { whiteSpace: "normal", wordWrap: "break-word", maxWidth: "200px" }, children: invoice.billToName }),
            /* @__PURE__ */ jsx("td", { children: invoice.parts && invoice.parts.length > 0 ? /* @__PURE__ */ jsx("div", { children: invoice.parts.map((part, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { children: part.title }, index),
              /* @__PURE__ */ jsx("br", {})
            ] })) }) : /* @__PURE__ */ jsx("span", { className: "text-muted", children: "No parts" }) }),
            /* @__PURE__ */ jsxs("td", { children: [
              "₹ ",
              invoice.total
            ] }),
            /* @__PURE__ */ jsxs("td", { style: { display: "flex" }, children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => previewInvoicePDF(invoice),
                  disabled: previewing === invoice._id,
                  className: "btn-sm me-1",
                  style: { width: "40px", height: "32px" },
                  title: previewing === invoice._id ? "Generating Preview..." : "Preview PDF",
                  children: /* @__PURE__ */ jsx("i", { className: previewing === invoice._id ? "fas fa-spinner fa-spin" : "fas fa-eye" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => downloadInvoicePDF(invoice),
                  disabled: downloading === invoice._id,
                  className: " btn-sm me-1",
                  style: { width: "40px", height: "32px" },
                  title: downloading === invoice._id ? "Generating..." : "Download PDF",
                  children: /* @__PURE__ */ jsx("i", { className: downloading === invoice._id ? "fas fa-spinner fa-spin" : "fas fa-download" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: " btn-sm me-1",
                  onClick: () => openEditModal(invoice),
                  style: { width: "40px", height: "32px" },
                  title: "Edit",
                  children: /* @__PURE__ */ jsx("i", { className: "fas fa-edit" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "btn-sm me-1",
                  onClick: () => openCloneModal(invoice),
                  disabled: cloning,
                  style: { width: "40px", height: "32px" },
                  title: "Clone Invoice",
                  children: /* @__PURE__ */ jsx("i", { className: cloning ? "fas fa-spinner fa-spin" : "fas fa-copy" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: " btn-sm",
                  onClick: () => handleDeleteInvoice(invoice._id, invoice.invoiceNumber),
                  style: { width: "40px", height: "32px" },
                  title: "Delete",
                  children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" })
                }
              )
            ] })
          ] }, invoice._id)) })
        ] }) }),
        totalPages > 1 && /* @__PURE__ */ jsx(PaginationComponent, {})
      ] }),
      showEditModal && /* @__PURE__ */ jsx("div", { className: "modal fade show", style: { display: "block" }, tabIndex: "-1", children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-xl", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
        /* @__PURE__ */ jsxs("div", { className: "modal-header", children: [
          /* @__PURE__ */ jsxs("h5", { className: "modal-title", children: [
            "Edit Invoice - ",
            editFormData.invoiceNumber
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn-close",
              onClick: () => setShowEditModal(false)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "modal-body", style: { maxHeight: "70vh", overflowY: "auto" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsx("h6", { children: "Invoice Details" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-xl-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Invoice Number" }),
              /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control form-control-sm",
                    name: "invoiceNumber",
                    value: editFormData.invoiceNumber,
                    onChange: handleInputChange,
                    style: {
                      borderColor: invoiceNumberStatus.isChecking ? "#ffc107" : invoiceNumberStatus.isDuplicate ? "#dc3545" : invoiceNumberStatus.isValid ? "#28a745" : "",
                      borderWidth: invoiceNumberStatus.isChecking || invoiceNumberStatus.isDuplicate || invoiceNumberStatus.isValid ? "2px" : "1px",
                      paddingRight: "35px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("span", { style: {
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px"
                }, children: [
                  invoiceNumberStatus.isChecking && /* @__PURE__ */ jsx("i", { className: "fas fa-spinner fa-spin", style: { color: "#ffc107" } }),
                  !invoiceNumberStatus.isChecking && invoiceNumberStatus.isDuplicate && /* @__PURE__ */ jsx("i", { className: "fas fa-times-circle", style: { color: "#dc3545" } }),
                  !invoiceNumberStatus.isChecking && invoiceNumberStatus.isValid && /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle", style: { color: "#28a745" } })
                ] })
              ] }),
              invoiceNumberStatus.isChecking && /* @__PURE__ */ jsxs("small", { className: "text-warning d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-spinner fa-spin" }),
                " Checking availability..."
              ] }),
              !invoiceNumberStatus.isChecking && invoiceNumberStatus.isDuplicate && /* @__PURE__ */ jsxs("small", { className: "text-danger d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-triangle" }),
                " This invoice number already exists!"
              ] }),
              !invoiceNumberStatus.isChecking && invoiceNumberStatus.isValid && /* @__PURE__ */ jsxs("small", { className: "text-success d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-check" }),
                " Invoice number is available"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  className: "form-control form-control-sm",
                  name: "date",
                  value: editFormData.date,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Terms" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control form-control-sm",
                  name: "terms",
                  value: editFormData.terms,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Due Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  className: "form-control form-control-sm",
                  name: "dueDate",
                  value: editFormData.dueDate,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "row", children: [
              /* @__PURE__ */ jsx("h6", { children: "Bill To" }),
              /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToName",
                      value: editFormData.billToName,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Company Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billtocompanyname",
                      value: editFormData.billtocompanyname,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Address" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToAddress",
                      value: editFormData.billToAddress,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Phone" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billTophone",
                      value: editFormData.billTophone,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.billTophone && !validatePhone(editFormData.billTophone) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToemail",
                      value: editFormData.billToemail,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.billToemail && !validateEmail(editFormData.billToemail) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "GSTIN" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billTogstin",
                      value: editFormData.billTogstin,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.billTogstin && !validateGST(editFormData.billTogstin) ? "red" : ""
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
                /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }, children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", checked: sameAsBillTo, onChange: handleSameAsBillTo }),
                  "Ship To same as Bill To"
                ] }) }),
                /* @__PURE__ */ jsx("h6", { children: "Ship To" }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToName",
                      value: editFormData.shipToName,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Company Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTocompanyname",
                      value: editFormData.shipTocompanyname,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Address" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToAddress",
                      value: editFormData.shipToAddress,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Phone" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTophone",
                      value: editFormData.shipTophone,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.shipTophone && !validatePhone(editFormData.shipTophone) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToemail",
                      value: editFormData.shipToemail,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.shipToemail && !validateEmail(editFormData.shipToemail) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "GSTIN" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTogstin",
                      value: editFormData.shipTogstin,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.shipTogstin && !validateGST(editFormData.shipTogstin) ? "red" : ""
                      }
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("h6", { children: "Invoice Items" }),
            editFormData.parts.map((part, partIndex) => /* @__PURE__ */ jsxs("div", { className: "border p-3 mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center mb-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control me-2",
                    value: part.title,
                    onChange: (e) => handlePartTitleChange(partIndex, e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-danger btn-sm",
                    onClick: () => removePart(partIndex),
                    children: "Remove Part"
                  }
                )
              ] }),
              part.items.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "row mb-2 align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "col-7", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Description",
                    value: item.description,
                    onChange: (e) => handlePartItemChange(partIndex, itemIndex, "description", e.target.value)
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Amount",
                    value: item.amount,
                    onChange: (e) => handlePartItemChange(partIndex, itemIndex, "amount", e.target.value),
                    step: "0.01"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "col-2", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-danger btn-sm w-50",
                    onClick: () => removePartItem(partIndex, itemIndex),
                    disabled: part.items.length <= 1,
                    title: part.items.length <= 1 ? "Cannot remove the last item" : "Remove item",
                    children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" })
                  }
                ) })
              ] }, itemIndex)),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary btn-sm",
                  onClick: () => addPartItem(partIndex),
                  children: "+ Add Item"
                }
              )
            ] }, partIndex)),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-primary mb-3",
                onClick: addNewPart,
                children: "+ Add New Part"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("h6", { children: "Discounts" }),
            /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("th", { children: "Discount Label" }),
                /* @__PURE__ */ jsx("th", { children: "Amount" }),
                /* @__PURE__ */ jsx("th", { children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: (editFormData.discounts || []).map((discount, index) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Discount description",
                    value: discount.label,
                    onChange: (e) => handleDiscountChange(index, "label", e.target.value)
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Discount amount",
                    value: discount.amount,
                    onChange: (e) => handleDiscountChange(index, "amount", e.target.value),
                    step: "0.01"
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-danger btn-sm",
                    onClick: () => handleDeleteDiscount(index),
                    children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" })
                  }
                ) })
              ] }, index)) })
            ] }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-secondary btn-sm",
                onClick: handleAddDiscount,
                children: "+ Add Discount"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "CGST Rate (%)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control",
                name: "cgstRate",
                value: editFormData.cgstRate,
                onChange: handleInputChange,
                step: "0.01",
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
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "SGST Rate (%)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control",
                name: "sgstRate",
                value: editFormData.sgstRate,
                onChange: handleInputChange,
                step: "0.01",
                onInput: (e) => {
                  const val = e.target.value;
                  if (/^\d{0,2}(\.\d{0,2})?$/.test(val) || val === "") {
                    e.target.value = val;
                  } else {
                    e.target.value = sgstRate;
                  }
                },
                inputMode: "decimal"
              }
            )
          ] }),
          "                    ",
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total Amount" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control",
                name: "total",
                value: editFormData.total,
                onChange: handleInputChange,
                step: "0.01"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Balance Due" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control",
                name: "balanceDue",
                value: editFormData.balanceDue,
                onChange: handleInputChange,
                step: "0.01"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total In Words" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "form-control",
                name: "totalInWords",
                value: editFormData.totalInWords,
                onChange: handleInputChange
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("h6", { children: "Additional Information" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Thank You Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "form-control",
                  name: "thankYouMessage",
                  value: editFormData.thankYouMessage,
                  onChange: handleInputChange,
                  rows: "3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Terms & Conditions" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "form-control",
                  name: "termsAndConditions",
                  value: editFormData.termsAndConditions,
                  onChange: handleInputChange,
                  rows: "4"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Bank Details" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "form-control",
                  name: "bankDetails",
                  value: editFormData.bankDetails,
                  onChange: handleInputChange,
                  rows: "6"
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn btn-secondary",
              onClick: () => setShowEditModal(false),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn btn-primary",
              onClick: handleUpdateInvoice,
              disabled: updating,
              children: updating ? "Updating..." : "Update Invoice"
            }
          )
        ] })
      ] }) }) }),
      showCloneModal && /* @__PURE__ */ jsx("div", { className: "modal fade show", style: { display: "block" }, tabIndex: "-1", children: /* @__PURE__ */ jsx("div", { className: "modal-dialog modal-xl", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
        /* @__PURE__ */ jsxs("div", { className: "modal-header", children: [
          /* @__PURE__ */ jsxs("h5", { className: "modal-title", children: [
            "Clone Invoice - ",
            editFormData.invoiceNumber
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn-close",
              onClick: () => setShowCloneModal(false)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "modal-body", style: { maxHeight: "70vh", overflowY: "auto" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsx("h6", { children: "Invoice Details" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-xl-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Invoice Number" }),
              /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control form-control-sm",
                    name: "invoiceNumber",
                    value: editFormData.invoiceNumber,
                    onChange: handleInputChange,
                    style: {
                      borderColor: invoiceNumberStatus.isChecking ? "#ffc107" : invoiceNumberStatus.isDuplicate ? "#dc3545" : invoiceNumberStatus.isValid ? "#28a745" : "",
                      borderWidth: invoiceNumberStatus.isChecking || invoiceNumberStatus.isDuplicate || invoiceNumberStatus.isValid ? "2px" : "1px",
                      paddingRight: "35px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("span", { style: {
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "16px"
                }, children: [
                  invoiceNumberStatus.isChecking && /* @__PURE__ */ jsx("i", { className: "fas fa-spinner fa-spin", style: { color: "#ffc107" } }),
                  !invoiceNumberStatus.isChecking && invoiceNumberStatus.isDuplicate && /* @__PURE__ */ jsx("i", { className: "fas fa-times-circle", style: { color: "#dc3545" } }),
                  !invoiceNumberStatus.isChecking && invoiceNumberStatus.isValid && /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle", style: { color: "#28a745" } })
                ] })
              ] }),
              invoiceNumberStatus.isChecking && /* @__PURE__ */ jsxs("small", { className: "text-warning d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-spinner fa-spin" }),
                " Checking availability..."
              ] }),
              !invoiceNumberStatus.isChecking && invoiceNumberStatus.isDuplicate && /* @__PURE__ */ jsxs("small", { className: "text-danger d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-triangle" }),
                " This invoice number already exists!"
              ] }),
              !invoiceNumberStatus.isChecking && invoiceNumberStatus.isValid && /* @__PURE__ */ jsxs("small", { className: "text-success d-block mt-1", children: [
                /* @__PURE__ */ jsx("i", { className: "fas fa-check" }),
                " Invoice number is available"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  className: "form-control",
                  name: "date",
                  value: editFormData.date,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Terms" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "terms",
                  value: editFormData.terms,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 col-md-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Due Date" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  className: "form-control",
                  name: "dueDate",
                  value: editFormData.dueDate,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "row", children: [
              /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
                /* @__PURE__ */ jsx("h6", { children: "Bill To" }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToName",
                      value: editFormData.billToName,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Company Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billtocompanyname",
                      value: editFormData.billtocompanyname,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Address" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToAddress",
                      value: editFormData.billToAddress,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Phone" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billTophone",
                      value: editFormData.billTophone,
                      onChange: handleInputChange,
                      maxLength: 13,
                      style: {
                        borderColor: editFormData.billTophone && !validatePhone(editFormData.billTophone) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billToemail",
                      value: editFormData.billToemail,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.billToemail && !validateEmail(editFormData.billToemail) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "GSTIN" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "billTogstin",
                      value: editFormData.billTogstin,
                      onChange: handleInputChange,
                      maxLength: 15,
                      style: {
                        borderColor: editFormData.billTogstin && !validateGST(editFormData.billTogstin) ? "red" : ""
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
                /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }, children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", checked: sameAsBillTo, onChange: handleSameAsBillTo }),
                  "Ship To same as Bill To"
                ] }) }),
                /* @__PURE__ */ jsx("h6", { children: "Ship To" }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToName",
                      value: editFormData.shipToName,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Company Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTocompanyname",
                      value: editFormData.shipTocompanyname,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Address" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToAddress",
                      value: editFormData.shipToAddress,
                      onChange: handleInputChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Phone" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTophone",
                      value: editFormData.shipTophone,
                      onChange: handleInputChange,
                      maxLength: 13,
                      style: {
                        borderColor: editFormData.shipTophone && !validatePhone(editFormData.shipTophone) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipToemail",
                      value: editFormData.shipToemail,
                      onChange: handleInputChange,
                      style: {
                        borderColor: editFormData.shipToemail && !validateEmail(editFormData.shipToemail) ? "red" : ""
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("label", { className: "form-label", children: "GSTIN" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control",
                      name: "shipTogstin",
                      value: editFormData.shipTogstin,
                      onChange: handleInputChange,
                      maxLength: 15,
                      style: {
                        borderColor: editFormData.shipTogstin && !validateGST(editFormData.shipTogstin) ? "red" : ""
                      }
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          editFormData.parts.map((part, partIndex) => /* @__PURE__ */ jsxs("div", { className: "border p-3 mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center mb-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control me-2",
                  value: part.title,
                  onChange: (e) => handlePartTitleChange(partIndex, e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-danger btn-sm",
                  onClick: () => removePart(partIndex),
                  children: "Remove Part"
                }
              )
            ] }),
            part.items.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "row mb-2 align-items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "col-7", children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  placeholder: "Description",
                  value: item.description,
                  onChange: (e) => handlePartItemChange(partIndex, itemIndex, "description", e.target.value)
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  placeholder: "Amount",
                  value: item.amount,
                  onChange: (e) => handlePartItemChange(partIndex, itemIndex, "amount", e.target.value),
                  step: "0.01"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "col-2", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-danger btn-sm w-50",
                  onClick: () => removePartItem(partIndex, itemIndex),
                  disabled: part.items.length <= 1,
                  title: part.items.length <= 1 ? "Cannot remove the last item" : "Remove item",
                  children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" })
                }
              ) })
            ] }, itemIndex)),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-secondary btn-sm",
                onClick: () => addPartItem(partIndex),
                children: "+ Add Item"
              }
            )
          ] }, partIndex)),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn btn-primary mb-3",
              onClick: addNewPart,
              children: "+ Add New Part"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("h6", { children: "Discounts" }),
            /* @__PURE__ */ jsx("div", { className: "table-responsive", children: /* @__PURE__ */ jsxs("table", { className: "table table-bordered", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("th", { children: "Discount Label" }),
                /* @__PURE__ */ jsx("th", { children: "Amount" }),
                /* @__PURE__ */ jsx("th", { children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: (editFormData.discounts || []).map((discount, index) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Discount description",
                    value: discount.label,
                    onChange: (e) => handleDiscountChange(index, "label", e.target.value)
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-control",
                    placeholder: "Discount amount",
                    value: discount.amount,
                    onChange: (e) => handleDiscountChange(index, "amount", e.target.value),
                    step: "0.01"
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-danger btn-sm",
                    onClick: () => handleDeleteDiscount(index),
                    children: /* @__PURE__ */ jsx("i", { className: "fas fa-trash" })
                  }
                ) })
              ] }, index)) })
            ] }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-secondary btn-sm",
                onClick: handleAddDiscount,
                children: "+ Add Discount"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("h6", { children: "Invoice Items" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "CGST Rate (%)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "cgstRate",
                  value: editFormData.cgstRate,
                  onChange: handleInputChange,
                  step: "0.01",
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
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "SGST Rate (%)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "sgstRate",
                  value: editFormData.sgstRate,
                  onChange: handleInputChange,
                  step: "0.01",
                  onInput: (e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}(\.\d{0,2})?$/.test(val) || val === "") {
                      e.target.value = val;
                    } else {
                      e.target.value = sgstRate;
                    }
                  },
                  inputMode: "decimal"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total Amount" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "total",
                  value: editFormData.total,
                  onChange: handleInputChange,
                  step: "0.01"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Balance Due" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "balanceDue",
                  value: editFormData.balanceDue,
                  onChange: handleInputChange,
                  step: "0.01"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total In Words" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control",
                  name: "totalInWords",
                  value: editFormData.totalInWords,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
              /* @__PURE__ */ jsx("h6", { children: "Additional Information" }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("label", { className: "form-label", children: "Thank You Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    className: "form-control",
                    name: "thankYouMessage",
                    value: editFormData.thankYouMessage,
                    onChange: handleInputChange,
                    rows: "3"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("label", { className: "form-label", children: "Terms & Conditions" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    className: "form-control",
                    name: "termsAndConditions",
                    value: editFormData.termsAndConditions,
                    onChange: handleInputChange,
                    rows: "4"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("label", { className: "form-label", children: "Bank Details" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    className: "form-control",
                    name: "bankDetails",
                    value: editFormData.bankDetails,
                    onChange: handleInputChange,
                    rows: "6"
                  }
                )
              ] })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "modal-footer", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-secondary",
                onClick: () => setShowCloneModal(false),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "btn btn-success",
                onClick: handleSaveClone,
                disabled: updating,
                children: updating ? "Creating..." : "Create Invoice"
              }
            )
          ] })
        ] })
      ] }) }) }),
      showEditModal && /* @__PURE__ */ jsx("div", { className: "modal-backdrop fade show" })
    ] }) })
  ] }) });
};
export {
  InvoiceList as default
};
