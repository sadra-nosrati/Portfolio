import { toast } from "react-toastify";
import { HiMiniCheckBadge, HiMiniXCircle } from "react-icons/hi2";

const base = {
  autoClose: 3500,
  closeButton: false,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 30,

  className:
    "!mt-3 mobile-small:!mt-5 mobile:!mt-5 tablet-portrait:!mt-0 !w-[calc(100vw-32px)] mobile-small:!mx-auto mobile:!mx-auto tablet-portrait:!mx-0 mobile:!w-[calc(100vw-32px)] tablet-portrait:!w-[360px] !max-w-[360px] !rounded-[18px] !overflow-hidden !p-0 !border !border-slate-200 !bg-white !shadow-[0_18px_45px_rgba(15,23,42,.12)]",

  bodyClassName: "!m-0 !p-0",
};

const ToastContent = ({
  title,
  text,
  icon,
  badgeBg,
  badgeBorder,
  iconColor,
}) => (
  <div className="flex items-center gap-4 px-4 py-4">
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
      style={{
        background: badgeBg,
        borderColor: badgeBorder,
      }}
    >
      {icon(iconColor)}
    </div>

    <div className="min-w-0 flex-1">
      <span className="block text-[15px] font-bold text-slate-900">
        {title}
      </span>

      <span className="mt-1 block wrap-break-word text-[13px] leading-6 text-slate-500">
        {text}
      </span>
    </div>
  </div>
);

export const notify = {
  success: (text) =>
    toast(
      <ToastContent
        title="عملیات موفق"
        text={text}
        badgeBg="#ECFDF3"
        badgeBorder="#BBF7D0"
        iconColor="#16A34A"
        icon={(color) => <HiMiniCheckBadge size={24} style={{ color }} />}
      />,
      {
        ...base,
        progressClassName: "toast-success-progress",
      },
    ),

  error: (text) =>
    toast(
      <ToastContent
        title="عملیات ناموفق"
        text={text}
        badgeBg="#FEF2F2"
        badgeBorder="#FECACA"
        iconColor="#DC2626"
        icon={(color) => <HiMiniXCircle size={24} style={{ color }} />}
      />,
      {
        ...base,
        progressClassName: "toast-error-progress",
      },
    ),
};
