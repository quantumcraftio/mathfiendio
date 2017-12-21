const translation = {
  en: {
    legalTitle: "Legal Notice",
    legalSpec: "Specifications according to § 5 TMG:",
    legalRepresented: "Represented by:",
    legalContact: "Contact:",
    legalRegisterEntry: "Registry entry:",
    legalRegisterLineOne: "Entry in commercial registry.",
    legalRegisterLineTwo: "Register court: Amtsgericht Charlottenburg",
    legalRegisterLineThree: "Register number: HR B 189796 B",
    legalDisclaimer: "Disclaimer",
    legalContentTitle: "Website Content",
    legalContent:
      "The author accepts no liability whatsoever in respect of the current relevance, accuracy, completeness or quality of the information on this website. The author accepts no liability whatsoever with respect to either material or immaterial losses incurred as a result of the use or non-use of the information presented here or the use of inaccurate or incomplete information unless the author is demonstrably guilty of acts of wilful or gross negligence. All services offered are subject to change and are without obligation. The author specifically reserves the right to change, amplify or delete parts of the pages or the whole of the services offered without prior notification or to cease publication, either temporarily or definitively.",
    legalLinksTitle: "Referrals and Links",
    legalLinks:
      "The author accepts no liability whatsoever in respect of the current relevance, accuracy, completeness or quality of the information on this website. The author accepts no liability whatsoever with respect to either material or immaterial losses incurred as a result of the use or non-use of the information presented here or the use of inaccurate or incomplete information unless the author is demonstrably guilty of acts of wilful or gross negligence. All services offered are subject to change and are without obligation. The author specifically reserves the right to change, amplify or delete parts of the pages or the whole of the services offered without prior notification or to cease publication, either temporarily or definitively.",
    legalCopyrightTitle: "Copyright",
    legalCopyright:
      " The author endeavours in all his publications to respect the copyright subsisting any of the graphics, sounds, video sequences and texts that he uses, to use graphics, sounds, video sequences and texts he has himself created or to use graphics, sounds, video sequences and texts not covered by copyright. All trademarks and brand names quoted on the website including those protected by copyright of third parties are subject unreservedly to the provisions of current copyright law and the rights of ownership of the registered copyright holders. The presence on this website of any brand or trade name is no indication of whether or not it is protected by the rights of third parties. The author of the pages reserves sole rights (copyright) for any published content created by him. The duplication or use of such graphics, sounds, video sequences and texts in other electronic or printed publications is prohibited without the specific consent of the author.  ",
  },
};

function translate(lan, key) {
  return translation[lan][key];
}

export default translate;
