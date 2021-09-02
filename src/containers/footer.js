import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link
            href="https://help.netflix.com/support/412"
            target="_blank"
          >
            FAQ
          </Footer.Link>
          <Footer.Link href="http://ir.netflix.com/" target="_blank">
            Investor Relations
          </Footer.Link>
          <Footer.Link
            href="https://help.netflix.com/legal/privacy"
            target="_blank"
          >
            Privacy
          </Footer.Link>
          <Footer.Link href="https://fast.com/" target="_blank">
            Speed Test
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/" target="_blank">
            Help Centre
          </Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/jobs" target="_blank">
            Jobs
          </Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link
            href="https://help.netflix.com/legal/notices"
            target="_blank"
          >
            Legal Notices
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Accounts</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link
            href="https://www.netflix.com/in/browse/genre/839338"
            target="_blank"
          >
            Only on Netflix
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://media.netflix.com/" target="_blank">
            Media Centre
          </Footer.Link>
          <Footer.Link
            href="https://help.netflix.com/legal/termsofuse"
            target="_blank"
          >
            Terms of Use
          </Footer.Link>
          <Footer.Link
            href="https://help.netflix.com/contactus"
            target="_blank"
          >
            Contact Us
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix India</Footer.Text>
    </Footer>
  );
}
