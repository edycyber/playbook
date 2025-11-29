import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Smartphone, Share, Plus, MoreVertical, Download } from "lucide-react";

interface InstallGuideDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstallGuideDialog({ open, onOpenChange }: InstallGuideDialogProps) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            <Download className="w-5 h-5 text-gold" />
            Install Playbook
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Add Playbook to your home screen for the best experience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {isIOS ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gold" />
                iPhone / iPad
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">1</span>
                  <span>Tap the <Share className="inline w-4 h-4 text-foreground" /> Share button at the bottom of Safari</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">2</span>
                  <span>Scroll down and tap <strong className="text-foreground">"Add to Home Screen"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">3</span>
                  <span>Tap <strong className="text-foreground">"Add"</strong> in the top right corner</span>
                </li>
              </ol>
            </div>
          ) : isAndroid ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gold" />
                Android
              </h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">1</span>
                  <span>Tap the <MoreVertical className="inline w-4 h-4 text-foreground" /> menu button in your browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">2</span>
                  <span>Tap <strong className="text-foreground">"Install app"</strong> or <strong className="text-foreground">"Add to Home Screen"</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">3</span>
                  <span>Tap <strong className="text-foreground">"Install"</strong> to confirm</span>
                </li>
              </ol>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gold" />
                  iPhone / iPad (Safari)
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">1</span>
                    <span>Tap <Share className="inline w-4 h-4 text-foreground" /> Share → "Add to Home Screen"</span>
                  </li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gold" />
                  Android (Chrome)
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">1</span>
                    <span>Tap <MoreVertical className="inline w-4 h-4 text-foreground" /> Menu → "Install app"</span>
                  </li>
                </ol>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gold" />
                  Desktop (Chrome/Edge)
                </h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">1</span>
                    <span>Click the <Plus className="inline w-4 h-4 text-foreground" /> install icon in the address bar</span>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
