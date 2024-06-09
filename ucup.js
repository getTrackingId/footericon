$(document).ready(function(){
        $('.select-btn').click(function(){
            $('.content').toggle();
        });

        $(document).on('click', '.options li', function(){
            let selectedOption = $(this).text();
            let selectedValue = $(this).data('value');
            $('#selectedOption').val(selectedValue);
            $('.select-btn span').text(selectedOption);
            $('.content').hide();
        });

        $('.srch').on('input', function() {
            let searchText = $(this).val().toLowerCase();
            let hasResults = false;
            $('.options li').each(function() {
                if ($(this).text().toLowerCase().includes(searchText)) {
                    $(this).show();
                    hasResults = true;
                } else {
                    $(this).hide();
                }
            });
            if (!hasResults) {
                $('.no-results').show();
            } else {
                $('.no-results').hide();
            }
        });

        for (let i = 0; i < 700; i++) {
            $("section").prepend($('<span>').addClass('square'));
        }

        $('#downloadSC').click(function() {
            window.location.href = 'https://api-bo.my.id';
        });
    });
