# Archived Documents

This folder contains archived versions of the site's legal documents.

## How to add a new archived document

### 1. Creating an MDX file

Create a new `.mdx` file in the `[id]/` folder with a name corresponding to the document's validity period.

**Name format:** `DDMMYYYY[start]DDMMYYYY[end].mdx`

**Example:**
- Date range: 01.01.2021 - 17.06.2025
- File name: `0101202117062025.mdx`

```
src/app/[locale]/(docs)/archived-docs/[id]/0101202117062025.mdx
```

### 2. MDX file content

The file must specify the validity period in the format:

**Was:**
```
Effective from 01 January 2021
```

**Became:**
```
Effectived from 01.01.2021 to 17.06.2025
```

**Example file structure:**
```mdx
# Terms and Conditions

**Optim System LTD**<br/>
‍Client Service Agreement<br/>
Effectived from 01.01.2021 to 17.06.2025

<div className='nesting mt-24'>
<!-- Document content -->
</div>
```

### 3. Adding to the archived documents list

In the `en.mdx` file, add the document object to the appropriate accordion:

```jsx
<ArchivedDocumentsAccordion
  titleKey="termsConditions"
  documents={[
    {
      id: "0101202117062025",           // File name without .mdx
      displayDate: "01.01.2021 - 17.06.2025",  // Date range for display
    },
    // Add new object here
  ]}
/>
```

**ArchivedDocumentsAccordion component props:**
- `titleKey` - localization key for accordion title. Available values:
  - `"termsConditions"` - Terms & conditions
  - `"privacy"` - Privacy
  - `"cookies"` - Cookies  
  - `"fraudPrevention"` - Fraud prevention
  - `"complaintsPolicy"` - Complaints Policy
- `documents` - array of document objects

**Document object structure:**
- `id` - MDX file name without extension
- `displayDate` - date range for display in the list

### Accessibility

After adding, the document will be available at:
`/archived-docs/{id}`

For example: `/archived-docs/0101202117062025` 