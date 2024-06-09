        $(document).ready(function () {
            for (let i = 0; i < 700; i++) {
                $("section").prepend($('<span>').addClass('square'));
            }
        });

        function copy(inputElement) {
            inputElement.select();
            document.execCommand("copy");
            alert(`LINK BERHASIL DISALIN!\n\n${inputElement.value}`);
        }

        function deleteWeb() {
            const folderID = "<?php echo htmlspecialchars($_GET['folder']); ?>";
            const confirmDelete = confirm("Yakin ingin menghapus Web?");
            if (confirmDelete) {
                $.ajax({
                    type: "POST",
                    url: "/req/proses.php",
                    data: { delete: folderID },
                    dataType: "text",
                    success: function () {
                        alert("Web telah dihapus!");
                        location.href = '/';
                    }
                });
            } else {
                alert("Penghapusan dibatalkan.");
            }
        }
