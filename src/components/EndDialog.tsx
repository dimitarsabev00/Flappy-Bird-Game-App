import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface EndDialogProps {
  showDialog: boolean;
  score: number;
  bestScore: number;
}

const EndDialog: React.FC<EndDialogProps> = (props) => {
  return (
    <Dialog
      open={props.showDialog}
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Score: {props.score} &nbsp; Best: {props.bestScore}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => window.location.reload()} color="primary">
          Restart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndDialog;
