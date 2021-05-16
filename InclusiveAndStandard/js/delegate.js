function delegate($delegator, eventName, selector, listener) {
  if (typeof listener === 'function') {
    $delegator.addEventListener(eventName, e => {
      const $candidates = $delegator.querySelectorAll(selector);

      for (let i = 0, len = $candidates.length; i < len; i++) {
        const $c = $candidates[i];

        if ($c.contains(e.target)) {
          listener.call(e.target, { ...e, currentTarget: $c, target: e.target, event: e });
          break;
        }
      }
    }, true);
  }
}
