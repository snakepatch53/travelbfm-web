import CrudHead from "../panel.components/CrudHead";
import {
    CrudTable,
    CrudTableTdFlex,
    CrudTableTdImage,
    CrudTableTdText,
} from "../panel.components/CrudTable";
import { CrudForm, CrudFormInput } from "../panel.components/CrudForm";
import CrudConfirm from "../panel.components/CrudConfirm";
import CrudProgress from "../panel.components/CrudProgress";
import Button from "../panel.components/Button";
import { faPen, faTrash, faShop, faBox } from "@fortawesome/free-solid-svg-icons";
import "react-notifications-component/dist/theme.css";
import {
    destroyBusiness,
    getBusinesses,
    storageBusiness,
    updateBusiness,
} from "../services/businesses";
import useCrudPanel from "../hooks/useCrudPanel";
import PageContent from "../component/PageContent";
import { useEffect, useState } from "react";
import { getUsers } from "../services/users";
import CrudBackground from "../panel.components/CrudBackground";
import CrudButtonOptions from "../panel.components/CrudButtonOptions";
import ModalProducts from "../panel.components/ModalProducts";

export default function Business() {
    const extraValidations = ($form, showNotification, { isUrl }) => {
        let validate = true;
        if (!isUrl($form.link.value)) {
            showNotification("El link debe ser una URL valida");
            validate = false;
        }
        if ($form.logo?.files?.length && $form.logo?.files[0]?.size > 2000000) {
            showNotification("La foto debe pesar maximo 2MB");
            validate = false;
        }

        return validate;
    };

    const {
        entityName,
        pluralEntityName,
        head,
        table,
        form,
        confirm,
        progress,
        datalist,
        $form,
        handleModeNew,
        handleModeEdit,
        handleModeDelete,
        hanleCancel,
        handleSubmit,
        handleDelete,
        searchValue,
        searchOnChange,
    } = useCrudPanel({
        entityName: "Negocio",
        pluralEntityName: "Negocios",
        excludeFieldsValidationEdit: ["logo", "url"],
        searchFields: ["name"],
        extraValidations,
        isStorageMultipartFormData: true,
        isUpdateMultipartFormData: true,
        crudGet: getBusinesses,
        crudStorage: storageBusiness,
        crudUpdate: updateBusiness,
        crudDestroy: destroyBusiness,
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => setUsers(res));
    }, []);

    const [businessIdSelected, setBusinessIdSelected] = useState(null);

    return (
        <PageContent className="flex flex-col gap-7 w-full">
            <CrudBackground src="/image/food6.jpg" />
            <CrudHead
                title={pluralEntityName}
                icon={faShop}
                isOpen={head}
                onClickNew={handleModeNew}
                searchValue={searchValue}
                searchOnChange={searchOnChange}
            />

            <CrudTable
                titles={["Logo", "Nombre", "Celular"]}
                dataList={datalist}
                isOpen={table}
                onRowPrint={(item) => (
                    <tr key={item.id}>
                        <CrudTableTdImage src={item.logo_url} alt={"Foto " + item.name} />
                        <CrudTableTdText value={item.name} />
                        <CrudTableTdText value={item.phone} />
                        <CrudTableTdFlex>
                            <CrudButtonOptions>
                                <Button
                                    text="Productos"
                                    icon={faBox}
                                    type="cancel"
                                    onClick={() => setBusinessIdSelected(item.id)}
                                />
                                <Button
                                    text="Editar"
                                    icon={faPen}
                                    type="edit"
                                    onClick={() => handleModeEdit(item)}
                                />
                                <Button
                                    text="Borrar"
                                    icon={faTrash}
                                    type="delete"
                                    onClick={() => handleModeDelete(item)}
                                />
                            </CrudButtonOptions>
                        </CrudTableTdFlex>
                    </tr>
                )}
            />

            <CrudForm
                title={entityName}
                isOpen={form}
                onClickCancel={hanleCancel}
                onSubmit={handleSubmit}
                // message={msg}
                formRef={$form}
            >
                <CrudFormInput
                    label="Nombre"
                    placeholder="Escriba el nombre"
                    name="name"
                    required
                />
                <CrudFormInput
                    label="Descripcion"
                    placeholder="Escriba una descripcion"
                    name="description"
                    required
                />
                <CrudFormInput
                    label="Descripcion corta"
                    placeholder="Escriba una descripcion corta"
                    name="short_description"
                    required
                />
                <CrudFormInput
                    label="Celular"
                    placeholder="Escriba su numero de celular"
                    name="phone"
                    required
                />
                <CrudFormInput
                    label="Direccion"
                    placeholder="Escriba una direccion"
                    name="address"
                    required
                />
                <CrudFormInput
                    label="Ubicación"
                    placeholder="Escriba su ubicacion"
                    name="location"
                    required
                />
                <CrudFormInput label="Link" placeholder="Escriba el link" name="link" required />
                <CrudFormInput
                    name="state"
                    label="Estado"
                    type="radio"
                    radioOptions={[
                        { value: "Activo", label: "Activo", checked: true },
                        { value: "Inactivo", label: "Inactivo" },
                    ]}
                    required
                />
                <CrudFormInput
                    label="Logo"
                    name="logo"
                    type="file"
                    accept="image/png,image/jpg,image/jpeg"
                    required
                />
                <CrudFormInput label="Usuario" name="user_id" type="select" required>
                    <option value="">Seleccione un usuario</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </CrudFormInput>
            </CrudForm>

            <CrudConfirm
                isOpen={confirm}
                text="¿Seguro de eliminar este usuario?"
                onClickDelete={handleDelete}
                onClickCancel={hanleCancel}
            />

            <CrudProgress isOpen={progress} text="Procesando tu solicitud..." />
            <ModalProducts businessId={businessIdSelected} setBusinessId={setBusinessIdSelected} />
        </PageContent>
    );
}
