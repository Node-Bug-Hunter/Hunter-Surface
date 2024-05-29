import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, List, ListItem, Stack, Typography } from "@mui/joy";
import { useState } from "react";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const faqs = [
    [
      "What is Bug Hunter?",
      <Typography>
        Bug Hunter is a cutting-edge tool designed for real-time application error monitoring.
        It identifies uncaught exceptions and critical errors, offering developers detailed reports that include error messages, stack traces, and contextual code information.
        The goal is to aid developers in quickly identifying and fixing issues to enhance application stability and user experience.
      </Typography>
    ],
    [
      "How does Bug Hunter report errors?",
      <List marker="circle">
        <ListItem><b>Logging:</b> It can save detailed error logs locally in text or JSON format for retrospective analysis.</ListItem>
        <ListItem><b>Email Notifications:</b> For instant alerts, Bug Hunter sends detailed error reports via email, formatted in HTML or plain text, including error specifics like stack traces and code context.</ListItem>
        <ListItem><b>Real-Time Monitoring:</b> Through its Web UI, Bug Hunter provides real-time error monitoring, allowing for swift response to issues as they arise.</ListItem>
      </List>
    ],
    [
      "What is the pricing model for Bug Hunter?",
      <Typography>
        The managed solution provided by Bug Hunter is completely free, and the front-end part of the project is fully open-sourced.
        This approach ensures that developers have access to powerful error monitoring tools without the added cost, making advanced debugging and monitoring capabilities more accessible to everyone.
      </Typography>
    ],
    [
      "How does Bug Hunter compare to PM2?",
      <Typography>
        Bug Hunter was developed as a side hobby project with the intention to offer all the features for free that are otherwise paid for in PM2.
        While PM2 is a popular process manager that includes features for application monitoring and management, Bug Hunter focuses specifically on real-time error tracking and notification, providing a specialized set of tools designed to simplify and enhance the error resolution process for developers.
        This comparison highlights Bug Hunter's commitment to offering a cost-effective solution for error monitoring with an emphasis on accessibility and community support.
      </Typography>
    ],
    [
      "How is Bug Hunter's backend implemented?",
      <Typography>
        Bug Hunter's backend is currently closed-source, developed using TypeScript and operating within a NodeJS environment.
        It is hosted on Cloudflare Worker and makes use of the MailChannel's API for email transmission, ensuring efficient and scalable error reporting.
        Despite its backend being closed-source, the project's commitment to transparency and community involvement is demonstrated through the open-sourced front-end and detailed documentation available to users.
      </Typography>
    ],
    [
      "How does Bug Hunter ensure the security and privacy of my data?",
      <Typography>
        Bug Hunter takes the security and privacy of user data seriously, implementing several measures to protect data both in transit and at rest.
        It uses TLS (Transport Layer Security) along with pre-transmission encryption to safeguard data against eavesdropping.
        These security practices ensure that sensitive error information and user data are securely transmitted and stored, providing users with confidence in the privacy and integrity of their data.
      </Typography>
    ]
  ];

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      m={2}
    >
      <Typography
        fontFamily={"monospace"}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={32}
        level="h3"
        mb={4}
      >
        Frequently Asked Queries
      </Typography>
      <AccordionGroup
        sx={{ maxWidth: 640 }}
        transition={{
          initial: "0.3s ease-out",
          expanded: "0.2s ease",
        }}
      >
        {
          faqs.map((faq, i) => (
            <Accordion
              onChange={(_, expanded) => { setActiveAccordion(expanded ? i : -1) }}
              expanded={activeAccordion === i}
              variant="soft"
              key={i}
            >
              <AccordionSummary sx={{ p: 2, fontWeight: "bold" }}>{faq[0]}</AccordionSummary>
              <AccordionDetails sx={{ px: 2 }}>{faq[1]}</AccordionDetails>
            </Accordion>
          ))
        }
      </AccordionGroup>
    </Stack>
  )
}
