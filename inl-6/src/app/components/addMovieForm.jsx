"use client";

function Form () {
  return (
    <div className="">
    <form>
        <fieldset>
            <label for="title-field">Titel:</label>
            <input type="text" id="title-field" class="form-control" />

            <label for="rating-field">Betyg:</label>

            <select type="text" id="rating-field" class="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </fieldset>
    </form>
    </div>
  );
};

export default Form;