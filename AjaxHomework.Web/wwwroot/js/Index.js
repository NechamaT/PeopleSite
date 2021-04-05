$(() => {

    function fillTable() {
        $("tbody").empty();
        $.get('/home/getall', function (ppl) {
            ppl.forEach(p => {
                $("tbody").append(`
<tr>
    <td>${p.firstName}</td>
    <td>${p.lastName}</td>
    <td>${p.age}</td>
    <td>
      <button class="btn btn-outline-success edit-button" id="edit" data-id="${p.id}" data-first-name="${p.firstName
                    }" data-last-name="${p.lastName}" data-age="${p.age}">Edit</button>
    </td>
    <td>
      <button class="btn btn-outline-danger delete-button" id="delete" data-id="${p.id}">Delete</button>
    </td>
</tr>`);
            });
        });
    }

    fillTable();

    $("#add-btn").on('click', function () {
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let age = $("#age").val();

        $("#first-name").val('');
        $("#last-name").val('');
        $("#age").val('');

        $.post('/home/add', { firstName, lastName, age }, function (p) {
            fillTable();
        });

    });

    $("tbody").on('click', '#edit', function() {
        let firstName = $(this).data('first-name');
        let lastName = $(this).data('last-name');
        let age = $(this).data('age');
        let id = $(this).data('id');
        $("#first-name-edit").val(firstName);
        $("#last-name-edit").val(lastName);
        $("#age-edit").val(age);
        $("#id-edit").val(id);
        $('.modal').modal();
        fillTable();
    })

    $("#save-btn").on('click', function() {
            let firstName = $("#first-name-edit").val();
            let lastName = $("#last-name-edit").val();
            let age = $("#age-edit").val();
            let id = $("#id-edit").val();

            $.post('/home/Edit', { firstName, lastName, age, id }, function(p) {
                
            })
        $('.modal').modal('hide');
        fillTable();
    })

    $("tbody").on('click', '.delete-button', function () {
        console.log('hello!!!');
        let id = $(this).data('id');

        $.post('home/Delete', {id}, function(id) {
            fillTable();
        })
    })


});