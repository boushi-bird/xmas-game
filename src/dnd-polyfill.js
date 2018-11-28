import { polyfill } from 'mobile-drag-drop';
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';
import 'mobile-drag-drop/default.css';

const result = polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
});

if (result) {
  global.document.addEventListener('dragenter', event => {
    event.preventDefault();
  });

  const disableNativeDragAndDrop = event => {
    if (!event.isTrusted) {
      return;
    }
    event.stopPropagation();
  };
  global.document.addEventListener('dragstart', disableNativeDragAndDrop, true);
}
