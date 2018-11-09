import React, { Component } from 'react';
import '../style/help.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Help extends Component {
  render() {
    return (
        <div className="message">
          <Link to="/"><FontAwesomeIcon id="closeIcon" icon="times-circle" /></Link>
          <p>
            This app, is designed to help the user who needs to print a document on both sides of one sheets or more, but he does not own an automatic duplex printer and or the software managing the document is not capable to separately print even/odd pages.
          </p>
          <p>
            Whithout this app the user needs to manually insert a sequence of even/odd pages in the print window. This, for larger documents could really be a trouble, causing mistakes and waste of time and paper if the sequence is wrong.
          </p>
          <p>
            With this app the user needs to just provide the document's number of pages, or an interval of pages (whithin that number). The app automatically provides both the even and odd sequences, ready for a copy and paste and the number of sheets needed for the operation.
          </p>
          <p><strong>Example</strong></p>
          <p>Let say we have a document, 50 pages long.</p>
          <p>If we have to print all the pages, we just insert 50 in the box "Number of pages" and click "Submit" to receive the result.</p>
          <p>
            If we have to print an interval, let say from page 14 to page 37, we insert 50 in the box as said before, then we select the checkbox "Select an interval". The 2 box "First page" and "Last page" will be active now, so we can insert 14 as first page and 37 as last. Lastly we have to click "Submit" to receive the result.
          </p>
          <p><strong>Note:</strong></p>
          <ol>
            <li>
              As soon the app is loaded, only the box to insert the number of pages and the help button are available. Other elements are disabled.
            </li>
            <li>
              After a first positive number is provided in the box, other elements will be available. The user will be able to submit the number, to select the checkbox to provide an interval or just reset the app.
            </li>
            <li>
              Once the result is shown, the user can only reset the App for a new sequence.
            </li>
          </ol>

      </div>
    );
  }
}

export default Help;
