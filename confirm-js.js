function confirmationModal(options) {
  var settings = $.extend(
    {
      title: 'Confirmation',
      message: 'Are you sure?',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      onConfirm: function () { },
      onCancel: function () { }
    },
    options
  );

  var modalHtml = `
    <div class="custom-confirmation-modal">
      <div class="custom-modal-overlay"></div>
      <div class="custom-modal-dialog">
        <div class="custom-modal-content">
          <div class="custom-modal-header">
            <h5 class="custom-modal-title">${settings.title}</h5>
            <button type="button" class="custom-modal-close">&times;</button>
          </div>
          <div class="custom-modal-body">
            <p>${settings.message}</p>
          </div>
          <div class="custom-modal-footer">
            <button type="button" class="custom-modal-btn custom-modal-cancel-btn">${settings.cancelText}</button>
            <button type="button" class="custom-modal-btn custom-modal-confirm-btn">${settings.confirmText}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  var $modal = $(modalHtml);

  $modal.find('.custom-modal-confirm-btn').on('click', function () {
    settings.onConfirm();
    $modal.remove();
  });

  $modal.find('.custom-modal-cancel-btn, .custom-modal-close').on('click', function () {
    settings.onCancel();
    $modal.remove();
  });

  $('body').append($modal);
}
