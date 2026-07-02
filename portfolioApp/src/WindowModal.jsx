function WindowModal({ title, content, onClose, offset = 0, isActive, onFocus }) {
  return (
    <div
      onClick={onFocus}
      style={{
        top: `${100 + offset * 30}px`,
        left: `${200 + offset * 30}px`,
        zIndex: isActive ? 50 : 40
      }}
      className="fixed w-3/4 h-3/4 bg-gray-900 border border-gray-600 rounded-lg shadow-2xl flex flex-col"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-600">
        <div className="flex items-center relative gap-2">
          <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
          <div onClick={onClose} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer"></div>
          <div onClick={onClose} className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm font-medium">
          {title}
        </span>
      </div>
      <div className="p-4 text-white overflow-auto h-full">
        {content}
      </div>
    </div>
  );
}

export default WindowModal;