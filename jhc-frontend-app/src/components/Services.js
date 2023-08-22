import React, { useContext } from 'react';
// import LoopIcon from '@mui/icons-material/Loop';
import { Avatar } from './Avatar';
import './styles/Services.scss';
import { ProblemAreas } from './ProblemAreas';
import { OrganizationProblems } from '../constants/Constants';
import { JhcContext } from '../context/JhcContext';
import Image from '../images/Jonas-4.png';
import Header from './Header';
import BookMeetingFormDialog from './BookMeetingFormDialog';
import { Box, Button, Dialog, DialogContent } from '@mui/material';
import BookMeetingForm from './BookMeetingForm';

export const Services = () => {
    const { selectedProblems, formFieldValues, setFieldErrors, loading } = useContext(JhcContext);
    // const [isLoading, setIsLoading] = useState(false);

    async function handleOnBookMeeting() {
        if (selectedProblems.length > 0) {
          const newErrors = {
            firstName: !formFieldValues.firstName,
            lastName: !formFieldValues.lastName,
            emailAddress: !formFieldValues.emailAddress,
            companyName: !formFieldValues.companyName,
        };        
        setFieldErrors(newErrors);
        const { isConfirmed } = await BookMeetingFormDialog.show((renderDialog) => (
            renderDialog({
              render: ({ handleConfirm, handleCancel }) => (
                <Dialog
                  className="responsive-dialog"
                  open
                  disableBackdropClick={true}
                  disableEscapeKeyDown={true}
                >
                  <DialogContent className="dialog-content styled-scrollbar">
                    <BookMeetingForm />
                    {/* {loading && <LoopIcon />} */}
                    <Box className="action-btn">
                      <Button onClick={handleConfirm} className="btn confirm">Request</Button>
                      <Button onClick={handleCancel} className="btn cancel">Discard</Button>
                    </Box>
                  </DialogContent>
                </Dialog>
              ),
            })
          ));
          if (!isConfirmed) {
            return;
          }
        }
      }

    return (
        <div className="problem-utilization">
            {/* {isLoading && (
                <div className="loading-box">
                    <AutorenewIcon />
                </div>
            )} */}
            <div className="content">
                <Header />
                <div className="avatar">
                    <Avatar image={Image} />
                </div>
                <div className="description">
                    What would you like to have help with?
                </div>
                <div className="showcase">
                    {OrganizationProblems.map((item) => {
                        return (
                            <ProblemAreas item={item} />
                        )
                    })}
                </div>
                <div className="redirect-btn" onClick={handleOnBookMeeting}>
                    Click to&nbsp;<span className={selectedProblems.length > 0 && 'active'}>continue</span>
                </div>
            </div>
        </div>
    )
}